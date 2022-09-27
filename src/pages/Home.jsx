import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Categories } from "../components/Categories";
import { Sort, sortItems } from "../components/Sort";
import Skeleton from "../components/Product/Skeleton";
import { Index } from "../components/Product";
import Pagination from "../components/Pagination";
import { ProductEmpty } from "../components/ProductEmpty";
import { SearchContext } from "../App";
import {
    selectFilter,
    setCategoryId,
    setCurrentPage,
    setFilters,
} from "../redux/slices/filterSlice";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { fetchProduct, selectProductData } from "../redux/slices/productSlice";

export const Home = () => {
    const navigate = useNavigate();
    const isSearch = useRef(false);
    const isMounted = useRef(false);
    // Redux
    const dispatch = useDispatch();
    const { categoryId, sort, currentPage, searchValue } =
        useSelector(selectFilter);
    const { items, status } = useSelector(selectProductData);

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id));
    };
    const onChangePage = (number) => {
        dispatch(setCurrentPage(number));
    };

    const getProduct = async () => {
        const sortParam = sort.sortProperty.replace("-", "");
        const order = sort.sortProperty.includes("-") ? "asc" : "desc";
        const catParam = categoryId === 0 ? "" : `&category=${categoryId}`;
        const searchParam = searchValue !== "" ? `&search=${searchValue}` : "";

        dispatch(
            fetchProduct({
                sortParam,
                order,
                catParam,
                searchParam,
                currentPage,
            })
        );
        window.scrollTo(0, 0);
    };

    // Если был первый рендер то проверяем УРЛ и сохраняем парметры в Редукс
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));

            const sort = sortItems.find(
                (obj) => obj.sortProperty === params.sortProperty
            );

            dispatch(
                setFilters({
                    ...params,
                    sort,
                })
            );
            isSearch.current = true;
        }
    }, []);

    // Если изменили параметры и был первый рендер
    useEffect(() => {
        getProduct();
        isSearch.current = false;
    }, [categoryId, sort.sortProperty, searchValue, currentPage]);

    // Если изменили параметры и был первый рендер
    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
                currentPage,
            });

            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [categoryId, sort.sortProperty, searchValue, currentPage]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    value={categoryId}
                    onClickCategory={onChangeCategory}
                />
                <Sort />
            </div>
            <h2 className="content__title">Усі піци</h2>
            {status === "error" ? (
                <ProductEmpty />
            ) : (
                <>
                    <div className="content__items">
                        {status === "loading"
                            ? [...new Array(6)].map((_, index) => (
                                  <Skeleton key={index} />
                              ))
                            : items.map((item) => (
                                  <Index key={item.id} {...item} />
                              ))}
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        onChangePage={onChangePage}
                    />
                </>
            )}
        </div>
    );
};

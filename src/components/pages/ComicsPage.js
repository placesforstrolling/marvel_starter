import {Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";

import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";

const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));

const ComicsPage = () => {

    return (
        <>
            <AppBanner/>
            <Routes>
                <Route>
                    <Route path=":comicId" element={<SingleComicPage/>}/>
                    <Route path="/" element={<ComicsList/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default ComicsPage;
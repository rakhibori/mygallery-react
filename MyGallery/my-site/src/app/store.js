import {configureStore} from '@reduxjs/toolkit';
import { myGalleryApi } from './services/myGalleryApi';

const store = configureStore({
    reducer:{
        [myGalleryApi.reducerPath]:myGalleryApi.reducer,
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(myGalleryApi.middleware),
})

export default store;



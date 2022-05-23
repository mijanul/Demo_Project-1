import React, {useState, useEffect} from 'react';
import {BackHandler} from 'react-native';

import HomeComponent from './homeComponent';
import {ProductList} from '../../models/productModels';
import {getProductList} from '../../services/productService'

const HomeContainer = () => {
  const [exitApp, setExitApp] = useState<number>(0);
  const [productList, setProductList] = useState<ProductList[]>([
  ]);
  const [loader, setLoader] = useState<boolean>(true)

  let timeCount: ReturnType<typeof setTimeout>;

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => {
      clearTimeout(timeCount);
      backHandler.remove();
    };
  });

  useEffect(() => {
    productListing()
  }, [])

  const backAction = () => {
    timeCount = setTimeout(() => {
      setExitApp(0);
    }, 2000);

    if (exitApp === 0) {
      setExitApp(exitApp + 1);
    } else if (exitApp === 1) {
      BackHandler.exitApp();
    }
    return true;
  };

  const productListing = async () => {
    try {
      const response = await getProductList()
      setProductList(response.data)
      setLoader(false)
    }
    catch (error: any) {
      console.log(error)
    }
  }

  return <HomeComponent list={productList} loader={loader}></HomeComponent>;
};

export default HomeContainer;

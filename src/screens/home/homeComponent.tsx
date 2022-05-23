import React from 'react';
import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {ProductList} from '../../models/productModels';
import commonStyle from '../../assets/css/mainStyle';

const HomeComponent = ({list, loader}: HomeComponentProps) => {
  const _renderList = ({item}) => (
    <>
      <View style={commonStyle.cardview}>
        <Text style={[commonStyle.productHeading, commonStyle.fs2]}>
          {item.title} ({item.category})
        </Text>
        <View style={commonStyle.innerCardView}>
          <Image source={{uri: item.image}} style={commonStyle.itemImage} />
          <View style={commonStyle.descriptionView}>
            <Text style={[commonStyle.descriptionText, commonStyle.fs109]}>
              {item.description}
            </Text>
          </View>
        </View>
        <View style={[commonStyle.rowView, commonStyle.mt2]}>
          <Text style={[commonStyle.fs2, commonStyle.rating]}>
            Rating : {item.rating.rate} ({item.rating.count})
          </Text>
          <Text style={commonStyle.price}>${item.price}</Text>
        </View>
      </View>
    </>
  );

  return (
    <>
      <SafeAreaView style={commonStyle.container}>
        {!loader ? (
          <FlatList
            data={list}
            renderItem={_renderList}
            keyExtractor={item => `${item.id}`}
          />
        ) : (
          <SkeletonPlaceholder>
            {[1, 2, 3, 4].map((_item, index) => {
              return (
                <View
                  key={index}
                  style={[commonStyle.cardview, commonStyle.skeltonView]}
                />
              );
            })}
          </SkeletonPlaceholder>
        )}
      </SafeAreaView>
    </>
  );
};

interface HomeComponentProps {
  list: ProductList[];
  loader: boolean;
}

export default HomeComponent;

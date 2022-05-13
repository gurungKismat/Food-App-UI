import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoryData from '../../assets/data/categoriesData';
import popularData from '../../assets/data/popularData';
import colors from '../../assets/colors/colors';

// Feather.loadFont();

export default Home = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          item.selected === true && {backgroundColor: colors.primary},
        ]}>
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categorySelectedWrapper,
            item.selected === true && {backgroundColor: 'white'},
          ]}>
          <Feather
            name="chevron-right"
            size={15}
            color={item.selected ? colors.textDark : 'white'}
            // style={styles.categorySelectedIcon}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        {/* header */}
        <View style={styles.headerWrapper}>
          <Image
            source={require('../../assets/images/profile.png')}
            style={styles.profileImage}
          />
          <Feather name="menu" size={24} color={colors.textDark} />
        </View>
        {/* title */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.subTitle}>Food</Text>
          <Text style={styles.subTitle2}>Delivery</Text>
        </View>
        {/* searchbar */}
        <View style={styles.searchWrapper}>
          <Feather name="search" size={24} color={colors.textDark} />
          <View style={styles.searchTextWrapper}>
            <Text style={styles.searchText}>Search..</Text>
          </View>
        </View>
        {/* categories */}
        <View style={styles.categoryWrapper}>
          <Text style={styles.categoryTitle}>Categories</Text>
          <View style={styles.categoryListWrapper}>
            <FlatList
              data={categoryData}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              horizontal={true}
            />
          </View>
        </View>
        {/* popular */}
        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular</Text>
          {popularData.map(item => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('details', {
                  item: item,
                })
              }
              key={item.id}
              style={[
                styles.popularCardWrapper,
                {
                  marginTop: item.id === 1 ? 10 : 15,
                  marginBottom: item.id === 3 ? 20 : 0,
                },
              ]}>
              <View>
                <View style={styles.popularTopContent}>
                  <MaterialCommunityIcons
                    name="crown"
                    size={16}
                    color={colors.primary}
                  />
                  <Text style={styles.popularTopTitle}>top of the week</Text>
                </View>

                <View style={styles.popularTitlesWrapper}>
                  <Text style={styles.popularItemTitle}>{item.title}</Text>
                  <Text style={styles.popularItemWeight}>
                    Weight {item.weight}
                  </Text>
                </View>

                <View style={styles.popularCardBottom}>
                  <View style={styles.addPizzaButton}>
                    <Feather name="plus" size={12} color={colors.textDark} />
                  </View>
                  <View style={styles.ratingWrapper}>
                    <MaterialCommunityIcons
                      name="star"
                      size={12}
                      color={colors.textDark}
                    />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.popularRight}>
                <Image source={item.image} style={styles.popularImage} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // padding: 10,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 20,
    padding: 20,
    alignItems: 'center',
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },

  titlesWrapper: {
    paddingHorizontal: 20,
    marginTop: 10,
  },

  subTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.textDark,
  },
  subTitle2: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },

  searchWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 36,
    alignItems: 'center',
  },

  searchTextWrapper: {
    flex: 1,
    borderBottomWidth: 1,
    marginLeft: 12,
    color: colors.textLight,
  },

  searchText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    marginBottom: 5,
    color: colors.textLight,
  },

  categoryWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  categoryTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.textDark,
  },

  categoryListWrapper: {
    paddingTop: 15,
  },

  categoryItemWrapper: {
    backgroundColor: 'white',
    marginRight: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },

  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    marginTop: 10,
  },
  categorySelectedWrapper: {
    marginTop: 20,
    marginBottom: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  popularWrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },

  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.textDark,
  },

  popularCardWrapper: {
    backgroundColor: 'white',
    paddingTop: 20,
    paddingLeft: 20,
    borderRadius: 25,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTopContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopTitle: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  popularTitlesWrapper: {
    marginTop: 20,
  },
  popularItemTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.textDark,
  },
  popularItemWeight: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
    color: colors.textLight,
    marginTop: 5,
  },

  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    marginLeft: -20,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },

  ratingText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },
  popularRight: {
    marginLeft: 40,
  },
  popularImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});

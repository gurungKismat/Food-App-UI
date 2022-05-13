import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../assets/colors/colors';

export default Details = ({route, navigation}) => {
  const {item} = route.params;
  //   console.log(item);

  const renderItem = ({item}) => (
    <View style={styles.ingredientItemWrapper}>
      <Image source={item.image} style={styles.ingredientImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.headerLeft}>
              <Feather name="chevron-left" size={18} color={colors.textDark} />
            </TouchableOpacity>

            <View style={styles.headerRight}>
              <MaterialCommunityIcons name="star" size={18} color={'white'} />
            </View>
          </View>
        </SafeAreaView>
        {/* title */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>

        {/* food info */}
        <View style={styles.infoWrapper}>
          <View style={styles.leftInfoWrapper}>
            <Text style={styles.infoLabel}>Size</Text>
            <Text style={styles.infoData}>{item.size}</Text>

            <Text style={styles.infoLabel}>Crust</Text>
            <Text style={styles.infoData}>{item.crust}</Text>

            <Text style={styles.infoLabel}>Delivery in</Text>
            <Text style={styles.infoData}>{item.deliveryTime} min</Text>
          </View>
          <View>
            <Image source={item.image} style={styles.infoFoodImage} />
          </View>
        </View>

        {/* ingredient */}
        <View style={styles.ingredientWrapper}>
          <Text style={styles.ingredientTitle}>Ingredients</Text>
          <FlatList
            data={item.ingredients}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            style={styles.ingredientListWrapper}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* place order */}
        <TouchableOpacity style={styles.placeOrderWrapper}>
          <Text style={styles.placeOrderText}>Place Order</Text>
          <Feather name="chevron-right" size={18} color={colors.textDark} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingRight: 20,
  },
  headerLeft: {
    borderWidth: 2,
    borderColor: colors.textLight,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  titlesWrapper: {
    paddingTop: 30,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    width: '50%',
  },
  price: {
    marginTop: 20,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 32,
    color: colors.price,
  },

  infoWrapper: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // overflow: 'hidden'
  },

  infoLabel: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: colors.textLight,
  },

  infoData: {
    marginTop: 5,
    marginBottom: 20,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: colors.textDark,
  },

  infoFoodImage: {
    resizeMode: 'contain',
    marginLeft: 45,
  },

  ingredientWrapper: {
    marginTop: 30,
  },
  ingredientTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.textDark,
  },
  ingredientListWrapper: {
    paddingVertical: 20,
    
  },
  ingredientItemWrapper: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredientImage: {
    resizeMode: 'contain',
  },
  placeOrderWrapper: {
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
    borderRadius: 50,
  },
  placeOrderText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: colors.textDark,
    marginRight: 5,
  },
});

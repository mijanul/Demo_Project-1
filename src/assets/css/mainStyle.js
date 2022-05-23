import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

function hp(givenHeight) {
  return (height * givenHeight) / 100;
}

function wp(givenWeight) {
  return (width * givenWeight) / 100;
}

export const Colors = {
  white: '#ffffff',
  lightGrey: '#dcdcdc',
  black: '#000000',
  errorRed: '#ff3333',
  grey: "#b5b5b5",
  themeBlue: "#24a0ed"
};

const commonStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  fs6: {
    fontSize: hp(6),
    color: Colors.black,
  },
  fs2: {
    fontSize: hp(2),
  },
  fs109: {
    fontSize: hp(1.9)
  },
  mt5: {
    marginTop: hp(5),
  },
  mt8: {
    marginTop: hp(6),
  },
  fs4: {
    fontSize: hp(4)
  },
  fs3: {
    fontSize: hp(3)
  },
  mt10: {marginTop: hp(10)},
  mt2: {marginTop: hp(2)},
  textInput: {
    width: wp(90),
    height: hp(7),
    backgroundColor: Colors.lightGrey,
    paddingHorizontal: wp(5.5),
    fontSize: hp(2),
    borderColor: Colors.black,
    borderRadius: hp(5),
  },
  errorTxt: {
    fontSize: hp(1.9),
    color: Colors.errorRed,
    marginTop: hp(0.3),
    width: wp(80),
  },
  btn: {
    width: wp(30),
    height: hp(6.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.themeBlue,
    borderRadius: hp(0.5)
  },
  btnTxt: {
    fontSize: hp(2.1),
    fontWeight: 'bold',
    color: Colors.white
  },

  cardview: {
    width: wp(93),
    backgroundColor: Colors.white,
    marginTop: hp(2),
    borderRadius: hp(3),
    marginBottom: hp(2),
    padding: wp(5),
    justifyContent: 'space-between',
  },
  innerCardView: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: hp(0.5)
  },
  itemImage: {
    height: hp(20),
    width: wp(20),
    resizeMode: 'contain',
  },
  descriptionView: {
    minHeight: hp(15),
    width: wp(58),
    padding: wp(5),
  },
  productHeading: {
    fontWeight: 'bold',
    color: Colors.black
  },
  descriptionText: {
    color: Colors.grey,
  },
  rowView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  price: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    color: Colors.themeBlue,
  },
  rating: {
    color: Colors.black,
    alignSelf: 'flex-end'
  },
  skeltonView: {
    height: hp(25)
  }

});

export default commonStyle;

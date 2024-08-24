import { StyleSheet } from 'react-native';

const mainStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#161622',
        padding: 25,
    },
    mainText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    signUpText: {
      textAlign: 'center',
      fontSize: 15,
      color: '#fff',
  },
  signUpLink: {
      textDecorationLine: 'none',
      color: '#d5cb75',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
},

    mainTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#e1dec8',
        marginBottom: 20,
    },
    logoContainer: {
      flexDirection: 'row',
      paddingBottom: 30,
      paddingTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
  },
});

export default mainStyles;

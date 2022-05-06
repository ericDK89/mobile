import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    
    alignItems: 'center',
  },
  header:{
    flexDirection: 'row',

    marginVertical: 16,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    paddingRight: 24,
  },
  titleText: {
    fontSize: 20,

    color: theme.colors.text_primary,

    fontFamily: theme.fonts.medium
  },
  image:{
    width: 24,
    height: 24,

    marginRight: 8,
  },
  textInput: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,

    height: 112,
    width: 327,

    padding: 12,
    marginBottom: 8,

    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.stroke,

    color: theme.colors.text_primary
  },
  footer: {
    flexDirection: 'row',

    marginBottom: 16,
  }
});
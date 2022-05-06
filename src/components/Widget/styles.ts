import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper'

import { theme } from '../../theme';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: theme.colors.background,
  },
  text: {
    color: theme.colors.text_primary,

    fontFamily: theme.fonts.regular
  },
  btn: {
    width: 48,
    height: 48,

    backgroundColor: theme.colors.brand,

    position: 'absolute',
    right: 16,
    bottom: getBottomSpace() + 16,

    borderRadius: 9999,

    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: theme.colors.surface_primary,

    paddingBottom: getBottomSpace() + 16,
  },
  indicator: {
    backgroundColor: theme.colors.text_primary,

    opacity: 0.25,

    width: 56,
  }
});
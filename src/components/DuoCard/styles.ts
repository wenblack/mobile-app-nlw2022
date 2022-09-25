import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 320,
    borderRadius: 8,
    backgroundColor: THEME.COLORS.SHAPE,
    padding: 20,
    marginRight: 16,
    alignItems: 'center'
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.PRIMARY,
    padding: 10,
    borderRadius: 6,
    marginBottom: 25

  },
  text: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.TEXT,
  }
});
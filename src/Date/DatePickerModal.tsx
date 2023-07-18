import * as React from 'react'
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
  Platform,
  StatusBar,
} from 'react-native'

import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
import DatePickerModalContent, {
  DatePickerModalContentMultiProps,
  DatePickerModalContentRangeProps,
  DatePickerModalContentSingleProps,
} from './DatePickerModalContent'
import { useHeaderBackgroundColor, useHeaderColorIsLight } from '../utils'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface DatePickerModalProps {
  visible: boolean
  animationType?: 'slide' | 'fade' | 'none'
  disableStatusBar?: boolean
  disableStatusBarPadding?: boolean
  inputEnabled?: boolean
}

export interface DatePickerModalSingleProps
  extends DatePickerModalContentSingleProps,
    DatePickerModalProps {}

export interface DatePickerModalMultiProps
  extends DatePickerModalContentMultiProps,
    DatePickerModalProps {}

export interface DatePickerModalRangeProps
  extends DatePickerModalContentRangeProps,
    DatePickerModalProps {}

export function DatePickerModal(
  props:
    | DatePickerModalRangeProps
    | DatePickerModalSingleProps
    | DatePickerModalMultiProps
) {
  const {
    visible,
    animationType,
    disableStatusBar,
    disableStatusBarPadding,
    inputEnabled,
    ...rest
  } = props
  const animationTypeCalculated =
    animationType ||
    Platform.select({
      web: 'none',
      default: 'slide',
    })

    const theme = {
      ...DefaultTheme,
      colors: {
        primary: '#37474F',
      }
    };
  
    return (
    <PaperProvider theme={theme}>
    <View style={{
      flex: 1
    }}>
      <Modal
        visible={visible}
        onRequestClose={rest.onDismiss}
        presentationStyle="overFullScreen"
        //@ts-ignore
        statusBarTranslucent={true}
        animationType="fade"
        transparent={true}
      >
        <>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
            pointerEvents="box-none"
          >
            <View
              style={[
                { backgroundColor: '#fff',
                  width: '90%',
                  height: '70%',
                  borderRadius: 16,
                  paddingBottom: 36,
                  paddingHorizontal: 8,
                },
              ]}
            >
              <DatePickerModalContent
                {...rest}
                inputEnabled={inputEnabled}
                disableSafeTop={disableStatusBar}
              />
            </View>
          </View>
        </>
      </Modal>
    </View>
    </PaperProvider>
  )
}

export default React.memo(DatePickerModal)

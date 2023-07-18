import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { MD2Theme, Text, useTheme } from 'react-native-paper'

function DayName({ label }: { label: string }) {
  const theme = useTheme()


  return (
    <View style={styles.dayName}>
      <Text
        maxFontSizeMultiplier={1.5}
        style={[
          styles.dayNameLabel,
          { color: theme.colors.primary },
        ]}
        selectable={false}
      >
        {label}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  dayName: { flex: 1, alignItems: 'center' },
  dayNameLabel: { fontSize: 14,  fontWeight: '600'  },
})
export default React.memo(DayName)

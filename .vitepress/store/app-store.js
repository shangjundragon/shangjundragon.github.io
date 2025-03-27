import {darkTheme, zhCN, dateZhCN} from 'naive-ui'
import {computed} from 'vue'

export function useNaiveUiConfig(isDark) {
    return {
        theme: computed(() => {
            return isDark.value ? darkTheme : undefined;
        }),
        locale: zhCN,
        dateLocale: dateZhCN
    }
}
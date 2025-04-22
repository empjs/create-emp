import { defineComponent } from 'vue';
import styles from './index.module.scss'
export default defineComponent(() => {
    return () => <div className={styles.container}>
      {"欢迎使用"}
    </div>;
});
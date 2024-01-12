// 表单校验规则
import { reactive } from "vue";
export const rules = reactive({
  // 对name字段进行必填验证
  account: {
    rules: [
      {
        required: true,
        errorMessage: "请输入姓名",
      },
      {
        minLength: 3,
        maxLength: 10,
        errorMessage: "姓名长度在 {minLength} 到 {maxLength} 个字符",
      },
    ],
  },
  // 对email字段进行必填验证
  password: {
    rules: [
      {
        required: true,
        errorMessage: "请输入密码",
      },
      {
        minLength: 3,
        maxLength: 10,
        errorMessage: "密码长度在 {minLength} 到 {maxLength} 个字符",
      },
    ],
  },
});

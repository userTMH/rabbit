import { defineStore } from "pinia";
import { ref } from "vue";
import { persist } from ".";
import type { mResult } from "@/api/type/myType";

export const userUserStore = defineStore(
  "user",
  () => {
    const token = ref("");
    const result = ref<mResult>();
    return {
      token,
      result,
    };
  },
  {
    persist,
  },
);

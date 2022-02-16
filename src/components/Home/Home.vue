<template>
  <h1>{{ $t("message") }}</h1>
</template>
<script>
import i18n from "../../i18n"
export default {
  created() {
    console.log("SHoW: ", i18n.t("message"))
  }
}
</script>
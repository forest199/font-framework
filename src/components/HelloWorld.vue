<template>
<!-- 创建要控制的区域 -->
<div class="container">
    <h1>Welcome here.</h1>
</div>
</template>

<script>
export default {
    name: "Product",
    data() {
        return {

        }
    },
    methods: {
        change(language) {
            localStorage.setItem("locale", language)
            this.$i18n.locale = language;
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>

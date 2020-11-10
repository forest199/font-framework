<template>
<div class="page-wrapper" id="wrapper">
    <header class="header fixed-top common-bg" id="header">
        <div id="nav-menu-wrap">
            <div class="container">
                <nav class="navbar navbar-expand-lg p-0">
                    <a class="navbar-brand" title="Home" href="index.html">
                        <img src="./assets/logo_white.png" alt="Logo White" class="img-fluid logo-transparent">
                        <img src="./assets/logo_black.png" alt="Logo White" class="img-fluid logo-normal">
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#fixedNavbar" aria-controls="fixedNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="togler-icon-inner">
                            <span class="line-1"></span>
                            <span class="line-2"></span>
                            <span class="line-3"></span>
                        </span>
                    </button>
                    <div class="collapse navbar-collapse main-menu justify-content-end" id="fixedNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active menu-link" href="#home">NFT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link menu-link" href="#features">矿池</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link menu-link" href="#testimonials">Staking</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link menu-link" href="#pricing">FOMO</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link " href="#">我的邀请</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link menu-link" href="#contact">限时活动</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>

    <main class="main-area">
        <router-view />
        <!--// Hero Section Start //-->
        <!--
            <section class="hero-banner" id="home">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-7 col-xl-6 col-md-10">
                            <div class="hero-inner">
                                <h1>Everyone is happy with the HovyLee, you?</h1>
                                <h2>
                                    Hovylee is now a little more exciting with its new interface.
                                    Shows incredible performance with different features.Sit back
                                    and enjoy all new features
                                </h2>
                                <div class="btn-group">
                                    <a href="#" title="Discovery Now" class="outline-btn">Discovery Now</a>
                                    <a href="#" title="Read More" class="white-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         -->

    </main>
</div>
<!--
<div id="app">
    <router-view />
</div> -->
</template>

<script>
export default {
    name: 'App',
    mounted() {
        // this.$store.commit('initWeb3');
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #abcdef;
}

.common-bg {
    background-color: #abcdef;
}

.main-area {
    margin-top: 110px;
}

.navbar-nav li {
    margin-left: 30px;
}
</style>

<template>
    <label :for="idInput">{{ labelName }}</label>
    <div class="wrap-btn" v-click-outside="onClickOutside">
        <button @click="showListLang">{{ defaultLangText }}</button>
        <ul class="wrap-btn__list" v-show="showList">
            <li v-for="lang in langs" :key="lang.id">
                <a href="#" @click="getLang(lang)">{{ lang }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'FormSelectLang',
        props: {
            idInput: String,
            labelName: String
        },
        data() {
            return {
                labelName: this.labelName,
                showList: false,
                defaultLangText: 'Язык',
                langs: ['Русский', 'Английский', 'Китайский', 'Испанский', 'Испанский', 'Испанский', 'Испанский']
            }
        },
        methods: {
            showListLang(e) {
                e.preventDefault();

                if (this.showList) {
                    this.showList = false;
                } else {
                    this.showList = true;
                }
            },
            onClickOutside(e) {
                this.showList = false;
            },
            getLang(lang) {
                this.defaultLangText = lang;
                this.showList = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrap-btn {
        position: relative;

        &::after {
            content: '';
            position: absolute;
            top: 50%;
            right: 17px;
            display: block;
            width: 16px;
            height: 16px;
            margin-top: -8px;
            background: url('~@/assets/img/arrow-down-sign-to-navigate.png') no-repeat;
        }

        button {
            width: 100%;
            height: 52px;
            padding-left: 14px;
            text-align: left;
            color: #7C9CBF;
            border: 1px solid #DBE2EA;
            background: #fff;
            box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
            border-radius: 6px;
            outline: none;

            &:focus {
                border: 2px solid #0880AE;
            }

            &::placeholder {
                color: #7C9CBF;
            }
        }

        &__list {
            position: absolute;
            top: 56px;
            left: 0;
            width: 100%;
            max-height: 200px;
            overflow: auto;
            -ms-overflow-style: none;
            scrollbar-width: none;
            padding: 10px 0;
            background: #FFFFFF;
            border: 1px solid #DBE2EA;
            box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04), 0px 20px 20px rgba(44, 39, 56, 0.04);
            border-radius: 6px;

            &::-webkit-scrollbar {
                width: 0;
                height: 0;
            }

            li {
                a {
                    display: flex;
                    align-items: center;
                    height: 44px;
                    padding-left: 15px;
                    color: #756F86;
                    text-decoration: none;

                    &:hover {
                        background: #EBF4F8;
                    }

                    &.active {
                        background: #EBF4F8;
                    }
                }
            }
        }
    }

    label { 
        display: block;
        font-weight: 500;
        line-height: 21px;
        color: #756F86;
    }
</style>
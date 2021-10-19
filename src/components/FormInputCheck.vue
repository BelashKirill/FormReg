<template>
    <div class="wrap-check">
        <input type="checkbox" :id="idInput" :checked="checked" @click="isCheked">
        <label :for="idInput">Принимаю <a href="#">условия</a> использования</label>
    </div>
</template>

<script>
    import store from '@/store';

    export default {
        name: 'FormInputCheck',
        props: {
            idInput: String,
        },
        data() {
            return {
                checked: false
            }
        },
        methods: {
            isCheked() {
                if (this.checked) {
                    this.checked = false;
                    store.dispatch('removeField', this.idInput);
                    store.dispatch('fieldsCompleted');
                    console.log(store.state.validFields);
                } else {
                    this.checked = true;
                    store.dispatch('addField', this.idInput);
                    store.dispatch('fieldsCompleted');
                    console.log(store.state.validFields);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    input {
        position: absolute;
        z-index: -1;
        opacity: 0;

        &:checked + label::before {
            background: url('~@/assets/img/Mask.png') no-repeat center center;
            border: 3px solid #0880AE;
        }
    }

    label {
        display: flex;
        align-items: center;
        font-weight: 500;
        line-height: 21px;
        color: #756F86;
        user-select: none;

        a {
            display: flex;
            padding: 0 3px;
            text-decoration: none;
            color: #0880AE;
        }

        &::before {
            content: '';
            display: flex;
            justify-content: center;
            align-items: center;
            width: 28px;
            height: 28px;
            margin-right: 9px;
            background: #fff;
            border: 1px solid #DBE2EA;
            box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
            border-radius: 4px;
        }
    }

    @media (max-width: 500px) {
        input {
            &:checked + label::before {
                background-size: 80%;
            }
        }

        label {
            font-size: 14px;

            &::before {
                width: 18px;
                height: 18px;
            }
        }
    }
</style>
<template>
    <div class="wrap-input">
        <label :for="idInput">{{ labelName }}</label>
        <input type="email" :placeholder="placeholder" v-model="email" :id="idInput" @input="validEmailReg">
        <span class="mess-error" v-show="validText">{{ msgError }}</span>
    </div>
</template>

<script>
    import store from '@/store';

    export default {
        name: 'FormInputEmail',
        props: {
            placeholder: String,
            idInput: String,
            labelName: String
        },
        data() {
            return {
                placeholder: this.placeholder,
                labelName: this.labelName,
                msgError: 'Введено не корректное значение',
                email: null,
                validText: false
            }
        },
        methods: {
            validEmailReg() {
                const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

                if (reg.test(this.email)) {
                    this.validText = false;
                    store.dispatch('addField', this.idInput);
                    store.dispatch('fieldsCompleted');
                    console.log(store.state.validFields);
                } else {
                    this.validText = true;
                    store.dispatch('removeField', this.idInput);
                    store.dispatch('fieldsCompleted');
                    console.log(store.state.validFields);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    input {
        width: 100%;
        height: 52px;
        padding-left: 14px;
        color: #2C2738;
        border: 1px solid #DBE2EA;
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

    label {
        display: block;
        margin-bottom: 5px;
        font-weight: 500;
        line-height: 21px;
        color: #756F86;
    }
</style>
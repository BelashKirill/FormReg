<template>
    <div class="wrap-input">
        <label :for="idInput">{{ labelName }}</label>
        <input type="text" :placeholder="placeholder" v-model="text" :id="idInput" @input="validTextReg">
        <span class="mess-error" v-show="validText">{{ msgError }}</span>
    </div>
</template>

<script>
    import store from '@/store';

    export default {
        name: 'FormInputText',
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
                text: null,
                validText: false
            }
        },
        methods: {
            validTextReg() {
                const reg = /^[A-Za-zА-Яа-я- ]+$/;

                if (reg.test(this.text)) {
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
<template>
    <div class="wrap-input">
        <label :for="idInput">{{ labelName }}</label>
        <input type="tel" :placeholder="placeholder" v-model="tel" :id="idInput" @input="validTelReg">
        <span class="mess-error" v-show="validText">{{ msgError }}</span>
    </div>
</template>

<script>
    import store from '@/store';

    export default {
        name: 'FormInputTel',
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
                tel: null,
                validText: false
            }
        },
        methods: {
            validTelReg() {
                const reg = /^[0-9()+-]+$/;
                const arrNum = [];
                let numbers;
                
                numbers = this.tel.split('');

                for (let i = 0; i < numbers.length; i++) {
                    if (numbers[i].match(/^[0-9]+$/)) {
                        arrNum.push(numbers[i]);
                    }
                }

                if (reg.test(this.tel)) {
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

                if (arrNum.length > 11) {
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
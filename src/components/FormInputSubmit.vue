<template>
    <input type="submit" :value="value" :disabled="$store.state.buttonIsDisabled">
</template>

<script>
    export default {
        name: 'FormInputSubmit',
        props: {
            value: String
        },
        data() {
            return {
                value: this.value
            }
        }
    }
</script>

<style lang="scss" scoped>
    input {
        width: 100%;
        height: 56px;
        font-weight: 500;
        color: #EBF4F8;
        background: #0880AE;
        border: 0;
        box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
        border-radius: 6px;
        cursor: pointer;
        transition: ease-out .4s;

        &:disabled {
            color: #B1B5BF;
            background: #DBE2EA;
            cursor: not-allowed;
        }

        &:hover {
            box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08), 0px 24px 48px rgba(44, 39, 56, 0.16);
        }

        &:active {
            box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.0001), 0px 4px 8px rgba(44, 39, 56, 0.08);
            border: 2px solid rgba(44, 39, 56, 0.86);
        }
    }
</style>
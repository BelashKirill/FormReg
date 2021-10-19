<template>
    <div class="wrap-reg">
        <div class="wrap-reg__inner">
            <h1>Регистрация</h1>
            <div class="wrap-reg__login">
                Уже есть аккаунт?
                <a href="#">Войти</a>
            </div>
            <form action="">
                <FormInputText :placeholder="'Введите Ваше имя'" :idInput="'name'" :labelName="'Имя'" />
                <FormInputEmail :placeholder="'Введите ваш email'" :idInput="'email'" :labelName="'Email'" />
                <FormInputTel :placeholder="'Введите номер телефона'" :idInput="'tel'" :labelName="'Номер телефона'" />
                <FormSelectLang :idInput="'lang'" :labelName="'Язык'" />
                <FormInputCheck :idInput="'check'" />
                <FormInputSubmit :value="'Зарегистрироваться'" />
            </form>
        </div>
    </div>
</template>

<script>
    import FormInputText from '@/components/FormInputText.vue';
    import FormInputEmail from '@/components/FormInputEmail.vue';
    import FormInputTel from '@/components/FormInputTel.vue';
    import FormSelectLang from '@/components/FormSelectLang.vue';
    import FormInputCheck from '@/components/FormInputCheck.vue';
    import FormInputSubmit from '@/components/FormInputSubmit.vue';

    export default {
        components: {
            FormInputText,
            FormInputEmail,
            FormInputTel,
            FormSelectLang,
            FormInputCheck,
            FormInputSubmit
        }
    }
</script>

<style lang="scss">
    .wrap-reg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #E5E5E5;

        &__inner {
            max-width: 460px;
            width: 100%;
            height: 789px;
            padding: 41px 30px 40px;
            background: #fff;
            box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02), 0px 32px 64px rgba(44, 39, 56, 0.04);
            border-radius: 24px;
        }

        &__login {
            margin-top: 6px;

            a {
                color: #0880AE;
                text-decoration: none;
            }
        }

        form {
            margin-top: 56px;

            input {
                margin-bottom: 33px;
            }

            label {
                margin-bottom: 5px;
            }

            input[type=submit] {
                margin-bottom: 0;
                margin-top: 32px;
            }
        }

        .wrap-check {
            margin-top: 34px;
        }
    }

    @media (max-width: 500px) {
        .wrap-reg {
            &__inner {
                max-width: 100%;
            }
        }
    }
</style>
<template>
  <div class="login-page">
    <div class="left">
      <div>
        <Icon
          class="logo"
          name="pi-academy"
        />
      </div>
      <div class="emblem">
        Pi Academy
      </div>
    </div>
    <div class="right">
      <div class="login">
        <div>Login</div>
        <div class="email">
          <TextArea
            placeholder="Email"
            v-model="email"
          />
        </div>
        <div class="password">
          <TextArea
            placeholder="Password"
            type="password"
            v-model="password"
          />
        </div>
        <div class="btn-go">
          <Button
            label="Go"
            type="primary"
            @click="submit"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextArea from '@/library/TextArea';
import Button from '@/library/Button';
import Icon from '@/library/Icon';

export default {
  components: {
    TextArea,
    Button,
    Icon,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submit(e) {
      console.log('Email:', this.email, ', Password:', this.password);
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  width: 100%;
  height: 100vh;
  font-family: 'Red Rose';
  font-size: var(--xxxl);

  .left {
    width: 50%;
    height: 100%;
    background: var(--color3);
    color: var(--color6);
    @include position-center;
  }

  .right {
    width: 50%;
    height: 100%;
    color: var(--color3);
    @include position-center;
  }

  .email, .password {
    display: flex;
    justify-content: center;
    margin-top: var(--xxxs);
  }

  .logo {
    height: calc(var(--xxxxl) * 3);
    width: calc(var(--xxxxl) * 3);
    display: inline-block;
  }
}

@media only screen and (max-width: $small-screen-breakpoint) {
  .login-page {
    flex-wrap: wrap;

    .left {
      width: 100%;
      height: 40%;
    }

    .right {
      width: 100%;
      height: 60%;
    }

    .logo {
      height: calc(var(--xxxxl) * 2);
      width: calc(var(--xxxxl) * 2);
      display: inline-block;
    }
  }
}
</style>

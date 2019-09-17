<template>
  <div id="validate-input">
    <input class="validate-input__input"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="valueUpdated"
      @change="valueUpdated"
    >
    <p class="validate-input__error"> {{ error }} </p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      required: false,
      type: String
    },
    lazy: {
      default: false,
      type: Boolean
    },
    validationObject: {
      required: true,
      type: Object
    },
    type: {
      default: 'text',
      type: String
    },
    placeholder: {
      default: '',
      type: String
    },
  },
  name: 'validate-input',
  methods: {
    valueUpdated ($event) {
      if ((!this.lazy && $event.type === 'input') || (this.lazy && $event.type === 'change')) {
        this.validationObject.$touch()
        this.$emit('input', $event.target.value)
      }
    }
  },
  computed: {
    error () {
      if (!this.validationObject.$dirty) {
        return ''
      }

      if (!this.validationObject.required) {
        return 'The field is required.'
      }

      if (!this.validationObject.email) {
        return 'The field must be an email.'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#validate-input {
  display: flex;

  flex-direction: column;

  .validate-input__input {
    flex-grow: 1;

    width: 100%;

    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
    background: white;

    color: $second-typo-color;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    text-align: center;

    &::placeholder {
      color: $placeholder-typo-color;
    }
  }

  .validate-input__error {
    height: 15px;

    flex-grow: 0;
    align-self: flex-end;

    margin-top: 3px;
    margin-right: 1px;

    color: $error-typo-color;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    font-weight: bold;
  }
}
</style>

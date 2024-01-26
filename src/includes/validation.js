import { alpha_spaces, confirmed, email, max, max_value, min, min_value, not_one_of, required } from "@vee-validate/rules";
import { ErrorMessage as VeeError, Field as VeeField, Form as VeeForm, defineRule } from "vee-validate";

export default {
	install(app) {
		app.component('VeeForm', VeeForm);
		app.component('VeeField', VeeField);
		app.component('VeeError', VeeError);

		defineRule('alpha_spaces', alpha_spaces);
		defineRule('confirmed', confirmed);
		defineRule('email', email);
		defineRule('max', max);
		defineRule('max_value', max_value);
		defineRule('min', min);
		defineRule('min_value', min_value);
		defineRule('not_one_of', not_one_of);
		defineRule('required', required);
	}
};

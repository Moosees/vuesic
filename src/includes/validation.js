import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage as VeeError } from "vee-validate";
import { required } from "@vee-validate/rules";

export default {
	install(app) {
		app.component('VeeForm', VeeForm);
		app.component('VeeField', VeeField);
		app.component('VeeError', VeeError);

		defineRule('required', required);
	}
};

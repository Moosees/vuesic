<template>
	<div class="fixed z-10 inset-0 overflow-y-auto" id="modal" :class="hiddenClass">
		<div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
			<div class="fixed inset-0 transition-opacity">
				<div class="absolute inset-0 bg-gray-800 opacity-75"></div>
			</div>

			<!-- This element is to trick the browser into centering the modal contents. -->
			<span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

			<div
				class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
				<!-- Add margin if you want to see some of the overlay behind the modal-->
				<div class="py-4 text-left px-6">
					<!--Title-->
					<div class="flex justify-between items-center pb-4">
						<p class="text-2xl font-bold">Your Account</p>
						<!-- Modal Close Button -->
						<div class="modal-close cursor-pointer z-50" @click="isAuthModalOpen = false">
							<i class="fas fa-times"></i>
						</div>
					</div>

					<!-- Tabs -->
					<ul class="flex flex-wrap mb-4">
						<li class="flex-auto text-center">
							<a class="block rounded py-3 px-4 transition " href="#"
								:class="{ 'hover:text-white text-white bg-blue-600': currentTab === 'login', 'hover:text-blue': currentTab === 'register' }"
								@click.prevent="currentTab = 'login'">Login</a>
						</li>
						<li class="flex-auto text-center">
							<a class="block rounded py-3 px-4 transition" href="#"
								:class="{ 'hover:text-white text-white bg-blue-600': currentTab === 'register', 'hover:text-blue': currentTab === 'login' }"
								@click.prevent="currentTab = 'register'">Register</a>
						</li>
					</ul>

					<!-- Login Form -->
					<form v-show="currentTab === 'login'">
						<!-- Email -->
						<div class="mb-3">
							<label class="inline-block mb-2">Email</label>
							<input type="email"
								class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
								placeholder="Enter Email" />
						</div>
						<!-- Password -->
						<div class="mb-3">
							<label class="inline-block mb-2">Password</label>
							<input type="password"
								class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
								placeholder="Password" />
						</div>
						<button type="submit"
							class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700">
							Submit
						</button>
					</form>
					<!-- Registration Form -->
					<vee-form v-show="currentTab === 'register'" :validation-schema="schema">
						<!-- Name -->
						<div class="mb-3">
							<label class="inline-block mb-2">Name</label>
							<vee-field type="text"
								class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
								placeholder="Enter Name" name="name" />
							<vee-error class="text-red-600" name="name" />
						</div>
						<!-- Email -->
						<div class="mb-3">
							<label class="inline-block mb-2">Email</label>
							<vee-field type="email"
								class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
								placeholder="Enter Email" name="email" />
							<vee-error class="text-red-600" name="email" />
						</div>
						<!-- Age -->
						<div class="mb-3">
							<label class="inline-block mb-2">Age</label>
							<vee-field type="number"
								class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
								name="age" />
							<vee-error class="text-red-600" name="age" />
						</div>
						<!-- Password -->
						<div class="mb-3">
							<label class="inline-block mb-2">Password</label>
							<vee-field type="password"
								class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
								placeholder="Password" name="password" />
							<vee-error class="text-red-600" name="password" />
						</div>
						<!-- Confirm Password -->
						<div class="mb-3">
							<label class="inline-block mb-2">Confirm Password</label>
							<vee-field type="password"
								class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
								placeholder="Confirm Password" name="confirm_password" />
							<vee-error class="text-red-600" name="confirm_password" />
						</div>
						<!-- Country -->
						<div class="mb-3">
							<label class="inline-block mb-2">Country</label>
							<vee-field as="select"
								class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
								name="country">
								<option value="USA">USA</option>
								<option value="Mexico">Mexico</option>
								<option value="Germany">Germany</option>
								<option value="Atlantis">Atlantis</option>
							</vee-field>
							<vee-error class="text-red-600" name="country" />
						</div>
						<!-- TOS -->
						<div class="mb-3 pl-6">
							<vee-field type="checkbox" class="w-4 h-4 float-left -ml-6 mt-1 rounded" value="true" name="tos" />
							<label class="inline-block">Accept terms of service</label>
							<vee-error class="text-red-600 block" name="tos" />
						</div>
						<button type="submit"
							class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700">
							Submit
						</button>
					</vee-form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapWritableState } from "pinia";
import { useModalStore } from "../stores/modal.js";

export default {
	name: 'AppAuth',
	data() {
		return {
			currentTab: 'login', schema: {
				name: 'required|min:3|max:50|alpha_spaces',
				email: 'required|max:50|email',
				age: 'required|min_value:18|max_value:150',
				password: 'required|min:6|max:50',
				confirm_password: 'confirmed:@password',
				country: 'required|not_one_of:Atlantis,USA',
				tos: 'required'
			}
		};
	},
	computed: {
		...mapState(useModalStore, ['hiddenClass']),
		// ...mapWritableState(useModalStore, 'isOpen')
		...mapWritableState(useModalStore, {
			isAuthModalOpen: 'isOpen'
		})
	}
};
</script>

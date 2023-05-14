import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api/realworld.ts';

/** @type {import('@sveltejs/kit').PageServerLoad} */
export async function load({ locals }) {
  if (locals.user) throw redirect(307, '/');
}

/** @type {import('@sveltejs/kit').Actions} */
export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();

    const body = await api.post('users/login', {
      user: {
        email: data.get('email'),
        password: data.get('password')
      }
    });

    if (body.errors) {
      return fail(401, body);
    }

    const value = btoa(JSON.stringify(body.user));
    cookies.set('jwt', value, { path: '/' });

    throw redirect(307, '/');
  }
};

import type { Database } from "$lib/types_db"
import { createClient } from "@supabase/supabase-js";
import { PUBLIC_SUPABASE_URL } from "$env/static/public";
import { SUPABASE_SERVICE_ROLE_KEY } from "$env/static/private"

export const supabaseAdmin = createClient<Database>(
	PUBLIC_SUPABASE_URL,
	SUPABASE_SERVICE_ROLE_KEY
);

export const getProfile = async (session) => {
    const profiles_table = "profiles"
    const {data, error } = await supabaseAdmin
    .from(profiles_table)
    .select('*')
    .filter('id', 'eq', session.user.id)
    .limit(1)
    .single()
    return {data, error}
}

export const deleteUser = async (userId) => {
    const { data, error } = await supabaseAdmin.auth.admin.deleteUser(
        userId
    )
    return {data, error}
}


export const signOut = async (session) => {
    const {error } = await supabaseAdmin.auth.admin.signOut(session)
    console.log("admin signout error",error.message)
}



import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getProjectBySlug } from '$lib/constants/data';

export const load: PageLoad = ({ params }) => {
    const project = getProjectBySlug(params.slug);

    if (!project) {
        throw error(404, {
            message: 'Project not found'
        });
    }

    return {
        project
    };
}
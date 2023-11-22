import Form from '@/app/ui/invoices/create-form';
import Breadcrums from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { Customer } from '../../../lib/definitions';

export default async function Page() {

	const customers = await fetchCustomers();
	return(
		<main>
			<Breadcrums
				breadcrumbs={[
					{ label: 'Invoices', href: '/dashboard/invoices' },
					{
						label: 'Create Invoice',
						href: '/dashboard/invoices/create',
						active: true,
					}
				]}
			/>
			<Form customers={customers} />
		</main>
	);
}
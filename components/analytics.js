import dynamic from 'next/dynamic';

const Analytics = dynamic(
	() =>
		Promise.all([
			import('autotrack/lib/plugins/url-change-tracker'),
			import('autotrack/lib/plugins/clean-url-tracker'),
			import('autotrack/lib/plugins/outbound-link-tracker')
		]),
	{
		ssr: false,
		render() {
			ga('create', 'UA-77290150-1', 'auto');
			ga('require', 'urlChangeTracker');
			ga('require', 'cleanUrlTracker');
			ga('require', 'outboundLinkTracker');
			ga('send', 'pageview');
			return null;
		}
	}
);

export default Analytics;

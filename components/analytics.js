import 'autotrack/lib/plugins/url-change-tracker';
import 'autotrack/lib/plugins/clean-url-tracker';
import 'autotrack/lib/plugins/outbound-link-tracker';

const Analytics = () => {
	ga('create', 'UA-77290150-1', 'auto');
	ga('require', 'urlChangeTracker');
	ga('require', 'cleanUrlTracker');
	ga('require', 'outboundLinkTracker');
	ga('send', 'pageview');

	return null;
};

export default Analytics;

# Table of contents

* [Home](README.md)
* [Get Started](get-started/README.md)
  * [RudderStack Architecture](get-started/rudderstack-architecture.md)
  * [RudderStack Cloud Mode vs. Device Mode](get-started/rudderstack-connection-modes.md)
  * [How to Add a Source and Destination in RudderStack](get-started/adding-source-and-destination-rudderstack.md)
* [Install and Set Up RudderStack](installing-and-setting-up-rudderstack/README.md)
  * [Docker](installing-and-setting-up-rudderstack/docker.md)
  * [Kubernetes](installing-and-setting-up-rudderstack/kubernetes.md)
  * [Native Installation](installing-and-setting-up-rudderstack/native-installation.md)
  * [Developer Machine Setup](installing-and-setting-up-rudderstack/developer-machine-setup.md)
* [RudderStack API Specification](rudderstack-api-spec/README.md)
  * [HTTP API Specification](rudderstack-api-spec/http-api-specification.md)
  * [RudderStack Transformation  API](rudderstack-api-spec/rudderstack-transformation-api/README.md)
    * [Access Token](rudderstack-api-spec/rudderstack-transformation-api/api-access-token.md)
  * [RudderStack Data Governance API](rudderstack-api-spec/rudderstack-data-governance-api.md)
  * [Pixel API Specification](rudderstack-api-spec/pixel-api-spec.md)
  * [E-Commerce Events Specification](rudderstack-api-spec/rudderstack-ecommerce-events-specification/README.md)
    * [Browsing](rudderstack-api-spec/rudderstack-ecommerce-events-specification/browsing.md)
    * [Promotions](rudderstack-api-spec/rudderstack-ecommerce-events-specification/promotions.md)
    * [Ordering](rudderstack-api-spec/rudderstack-ecommerce-events-specification/ordering.md)
    * [Coupons](rudderstack-api-spec/rudderstack-ecommerce-events-specification/coupons.md)
    * [Wishlist](rudderstack-api-spec/rudderstack-ecommerce-events-specification/wishlisting.md)
    * [Sharing](rudderstack-api-spec/rudderstack-ecommerce-events-specification/sharing.md)
    * [Reviewing](rudderstack-api-spec/rudderstack-ecommerce-events-specification/reviewing.md)
* [RudderStack Enterprise API](rudderstack-enterprise/README.md)
  * [User Suppression in RudderStack](rudderstack-enterprise/user-suppression.md)
  * [Identity Resolution in RudderStack](rudderstack-enterprise/identity-resolution-in-rudderstack.md)
* [RudderStack SDK Integration Guides](rudderstack-sdk-integration-guides/README.md)
  * [JavaScript](rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/README.md)
    * [JavaScript SDK Enhancements](rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/javascript-sdk-enhancements.md)
  * [Android](rudderstack-sdk-integration-guides/rudderstack-android-sdk/README.md)
    * [How to Add an Application Class to Your Android App](rudderstack-sdk-integration-guides/rudderstack-android-sdk/add-an-application-class-to-you-android-application.md)
  * [iOS](rudderstack-sdk-integration-guides/rudderstack-ios-sdk.md)
  * [Unity](rudderstack-sdk-integration-guides/getting-started-with-unity-sdk.md)
  * [React Native](rudderstack-sdk-integration-guides/rudderstack-react-native-sdk.md)
  * [Flutter](rudderstack-sdk-integration-guides/rudderstack-flutter-sdk.md)
  * [AMP Analytics](rudderstack-sdk-integration-guides/amp-analytics.md)
  * [Java](rudderstack-sdk-integration-guides/rudderstack-java-sdk.md)
  * [Python](rudderstack-sdk-integration-guides/rudderstack-python-sdk.md)
  * [Node.js](rudderstack-sdk-integration-guides/rudderstack-node-sdk.md)
  * [Go](rudderstack-sdk-integration-guides/rudderstack-go-sdk.md)
  * [Ruby](rudderstack-sdk-integration-guides/rudderstack-ruby-sdk.md)
  * [.NET](rudderstack-sdk-integration-guides/.net.md)
  * [PHP](rudderstack-sdk-integration-guides/php.md)
  * [SDK FAQs](rudderstack-sdk-integration-guides/sdk-faqs.md)
* [RudderStack Event Streams](rudderstack-event-streams/README.md)
  * [App Center](rudderstack-event-streams/appcenter.md)
  * [AppsFlyer](rudderstack-event-streams/appsflyer.md)
  * [Auth0](rudderstack-event-streams/auth0.md)
  * [Customer.io](rudderstack-event-streams/customerio.md)
  * [Extole](rudderstack-event-streams/extole.md)
  * [Looker](rudderstack-event-streams/looker.md)
  * [PostHog](rudderstack-event-streams/posthog.md)
  * [Segment](rudderstack-event-streams/segment.md)
* [RudderStack Cloud Extract Sources](cloud-extract-sources/README.md)
  * [Facebook Ads](cloud-extract-sources/facebook-ads.md)
  * [Google AdWords](cloud-extract-sources/google-adwords.md)
  * [Google Analytics](cloud-extract-sources/google-analytics.md)
  * [Google Search Console](cloud-extract-sources/google-search-console.md)
  * [Google Sheets](cloud-extract-sources/google-sheets.md)
  * [HubSpot](cloud-extract-sources/hubspot.md)
  * [Intercom](cloud-extract-sources/intercom.md)
  * [Pipedrive](cloud-extract-sources/pipedrive.md)
  * [Mixpanel](cloud-extract-sources/mixpanel.md)
  * [Marketo](cloud-extract-sources/marketo.md)
  * [Netsuite](cloud-extract-sources/netsuite.md)
  * [Salesforce](cloud-extract-sources/salesforce/README.md)
    * [Schema Comparison: RudderStack vs. Segment](cloud-extract-sources/salesforce/schema-comparison-rudderstack-vs-segment.md)
  * [Salesforce Pardot](cloud-extract-sources/salesforce-pardot.md)
  * [Stripe](cloud-extract-sources/stripe.md)
  * [Xero](cloud-extract-sources/xero.md)
  * [Zendesk](cloud-extract-sources/zendesk.md)
  * [Zendesk Chat](cloud-extract-sources/zendesk-chat.md)
* [RudderStack Warehouse Actions](warehouse-actions/README.md)
  * [Amazon Redshift](warehouse-actions/amazon-redshift.md)
  * [Amazon S3](warehouse-actions/amazon-s3.md)
  * [ClickHouse](warehouse-actions/clickhouse.md)
  * [Google BigQuery](warehouse-actions/google-bigquery.md)
  * [PostgreSQL](warehouse-actions/postgresql.md)
  * [Snowflake](warehouse-actions/snowflake.md)
* [RudderStack Destinations](destinations/README.md)
  * [ActiveCampaign](destinations/active-campaign.md)
  * [Adjust](destinations/adjust.md)
  * [Amazon EventBridge](destinations/amazon-eventbridge.md)
  * [Amazon Kinesis](destinations/amazon-kinesis.md)
  * [Amazon Kinesis Firehose](destinations/amazon-kinesis-firehose.md)
  * [Amazon S3](destinations/amazon-s3.md)
  * [AWS Personalize](destinations/aws-personalize.md)
  * [Amplitude](destinations/amplitude.md)
  * [Apache Kafka](destinations/kafka.md)
  * [App Center](destinations/appcenter.md)
  * [Appcues](destinations/appcues.md)
  * [AppsFlyer](destinations/appsflyer.md)
  * [Autopilot](destinations/autopilot.md)
  * [Azure Blob Storage](destinations/microsoft-azure-blob-storage.md)
  * [Azure Event Hubs](destinations/azure-event-hubs.md)
  * [Bing Ads](destinations/bingads.md)
  * [Branch](destinations/branchio.md)
  * [Braze](destinations/braze.md)
  * [Bugsnag](destinations/bugsnag.md)
  * [Chartbeat](destinations/chartbeat.md)
  * [CleverTap](destinations/clevertap.md)
  * [Confluent Cloud](destinations/confluent-cloud.md)
  * [Customer.io](destinations/customer.io.md)
  * [DigitalOcean Spaces](destinations/digitalocean-spaces.md)
  * [Facebook App Events](destinations/facebook-app-events.md)
  * [Facebook Pixel](destinations/fb-pixel.md)
  * [Firebase](destinations/firebase.md)
  * [FullStory](destinations/fullstory.md)
  * [Google Ads](destinations/google-ads.md)
  * [Google Analytics](destinations/google-analytics-ga.md)
  * [Google Analytics 4](destinations/google-analytics-4.md)
  * [Google Cloud Storage](destinations/google-cloud-storage.md)
  * [Google Pub/Sub](destinations/google-pub-sub.md)
  * [Google Sheets](destinations/google-sheets.md)
  * [Google Tag Manager](destinations/google-tag-manager.md)
  * [Heap.io](destinations/heap.io.md)
  * [Hotjar](destinations/hotjar.md)
  * [HubSpot](destinations/hubspot.md)
  * [Indicative](destinations/indicative.md)
  * [Intercom](destinations/intercom.md)
  * [Iterable](destinations/iterable.md)
  * [Keen](destinations/keen.md)
  * [Kissmetrics](destinations/kissmetrics.md)
  * [Klaviyo](destinations/klaviyo.md)
  * [Kochava](destinations/kochava.md)
  * [Kustomer](destinations/kustomer.md)
  * [Leanplum](destinations/leanplum.md)
  * [Lotame](destinations/lotame.md)
  * [Lytics](destinations/lytics.md)
  * [Mailchimp](destinations/mailchimp.md)
  * [Marketo](destinations/marketo.md)
  * [MinIO](destinations/minio.md)
  * [Mixpanel](destinations/mixpanel.md)
  * [MoEngage](destinations/moengage.md)
  * [Monetate](destinations/monetate.md)
  * [Optimizely Full Stack](destinations/optimizely-full-stack.md)
  * [Optimizely Web](destinations/optimizely-web.md)
  * [Pendo](destinations/pendo.md)
  * [PostHog](destinations/posthog.md)
  * [Redis](destinations/redis.md)
  * [Salesforce](destinations/salesforce.md)
  * [Salesforce Marketing Cloud](destinations/sfmc.md)
  * [Slack](destinations/slack.md)
  * [TVSquared](destinations/tvsquared.md)
  * [Userlist](destinations/userlist.md)
  * [VWO \(Visual Website Optimizer\)](destinations/vwo-beta-visual-website-optimizer.md)
  * [Webhooks](destinations/webhooks.md)
  * [Zendesk](destinations/zendesk.md)
* [Data Warehouse Destinations](data-warehouse-integrations/README.md)
  * [Warehouse FAQs](data-warehouse-integrations/warehouse-faqs.md)
  * [Warehouse Schemas](data-warehouse-integrations/warehouse-schemas.md)
  * [Amazon Redshift](data-warehouse-integrations/amazon-redshift.md)
  * [ClickHouse](data-warehouse-integrations/clickhouse.md)
  * [Google BigQuery](data-warehouse-integrations/google-bigquery.md)
  * [Snowflake](data-warehouse-integrations/snowflake.md)
  * [PostgreSQL](data-warehouse-integrations/postgresql.md)
* [User Transformations in RudderStack](adding-a-new-user-transformation-in-rudderstack.md)
* [Migration Guides](migration-guides/README.md)
  * [Migrating from Blendo to RudderStack](migration-guides/blendo-rudderstack-migration.md)
  * [Migrating from Segment to RudderStack](migration-guides/rudderstack-migration-guide.md)
  * [Migrating Your Warehouse Destination from Segment to RudderStack](migration-guides/how-to-migrate-warehouse-destination-from-segment-to-rudderstack.md)
* [Administrator's Guides](administrators-guide/README.md)
  * [RudderStack Single Sign-On \(SSO\)](administrators-guide/rudderstack-single-sign-on-sso.md)
  * [Understanding the RudderStack Dashboard](administrators-guide/rudderstack-dashboard.md)
  * [Software Releases](administrators-guide/software-releases.md)
  * [High Availability](administrators-guide/high-availability.md)
  * [Horizontal Scaling](administrators-guide/horizontal-scaling-1.md)
  * [Events Backup Bucket Permissions](administrators-guide/event-dump-bucket-permissions.md)
  * [Alerting Guide](administrators-guide/alerting.md)
  * [Infrastructure Provisioning](administrators-guide/infra-provisioning.md)
  * [Monitoring and Metrics](administrators-guide/monitoring-and-metrics.md)
  * [Configuration Parameters](administrators-guide/config-parameters.md)
  * [Troubleshooting Guide](administrators-guide/admin-troubleshooting-guide.md)
* [Contributor's Guides](contributors-guide/README.md)
  * [How to Create a New Destination Transformation for RudderStack](contributors-guide/create-a-new-destination-transformer-for-rudder/README.md)
    * [Best Practices for Coding Transformation Functions in JavaScript](contributors-guide/create-a-new-destination-transformer-for-rudder/best-practices-for-coding-transformation-functions-in-javascript.md)
  * [How to Use AWS Lambda Functions with RudderStack](contributors-guide/using-aws-lambda-functions-with-rudderstack.md)
  * [How to Develop Integrations for RudderStack](contributors-guide/developing-integrations-for-rudderstack.md)
  * [How to Implement a Native JavaScript SDK Integration](contributors-guide/implement-native-js-sdk-integration/README.md)
    * [How to Add a Device Mode SDK to RudderStack JavaScript SDK](contributors-guide/implement-native-js-sdk-integration/add-device-mode-sdk-to-js.md)
* [How-to Guides](how-to-guides/README.md)
  * [How to Use the RudderStack Config Generator](how-to-guides/rudderstack-config-generator.md)
  * [How to Debug Live Destination Events](how-to-guides/live-destination-event-debugger.md)
  * [How to Integrate Rudderstack with a Gatsby Website](how-to-guides/how-to-integrate-rudderstack-with-a-gatsby-website.md)
  * [How to Use Custom Domains](how-to-guides/custom-domains.md)
* [FAQs](faqs.md)

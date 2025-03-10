import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {WaiterConfiguration} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class DMS extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: DMS.Types.ClientConfiguration)
  config: Config & DMS.Types.ClientConfiguration;
  /**
   * Adds metadata tags to an DMS resource, including replication instance, endpoint, subnet group, and migration task. These tags can also be used with cost allocation reporting to track cost associated with DMS resources, or used in a Condition statement in an IAM policy for DMS. For more information, see  Tag  data type description.
   */
  addTagsToResource(params: DMS.Types.AddTagsToResourceMessage, callback?: (err: AWSError, data: DMS.Types.AddTagsToResourceResponse) => void): Request<DMS.Types.AddTagsToResourceResponse, AWSError>;
  /**
   * Adds metadata tags to an DMS resource, including replication instance, endpoint, subnet group, and migration task. These tags can also be used with cost allocation reporting to track cost associated with DMS resources, or used in a Condition statement in an IAM policy for DMS. For more information, see  Tag  data type description.
   */
  addTagsToResource(callback?: (err: AWSError, data: DMS.Types.AddTagsToResourceResponse) => void): Request<DMS.Types.AddTagsToResourceResponse, AWSError>;
  /**
   * Applies a pending maintenance action to a resource (for example, to a replication instance).
   */
  applyPendingMaintenanceAction(params: DMS.Types.ApplyPendingMaintenanceActionMessage, callback?: (err: AWSError, data: DMS.Types.ApplyPendingMaintenanceActionResponse) => void): Request<DMS.Types.ApplyPendingMaintenanceActionResponse, AWSError>;
  /**
   * Applies a pending maintenance action to a resource (for example, to a replication instance).
   */
  applyPendingMaintenanceAction(callback?: (err: AWSError, data: DMS.Types.ApplyPendingMaintenanceActionResponse) => void): Request<DMS.Types.ApplyPendingMaintenanceActionResponse, AWSError>;
  /**
   * Starts the analysis of up to 20 source databases to recommend target engines for each source database. This is a batch version of StartRecommendations. The result of analysis of each source database is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.
   */
  batchStartRecommendations(params: DMS.Types.BatchStartRecommendationsRequest, callback?: (err: AWSError, data: DMS.Types.BatchStartRecommendationsResponse) => void): Request<DMS.Types.BatchStartRecommendationsResponse, AWSError>;
  /**
   * Starts the analysis of up to 20 source databases to recommend target engines for each source database. This is a batch version of StartRecommendations. The result of analysis of each source database is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.
   */
  batchStartRecommendations(callback?: (err: AWSError, data: DMS.Types.BatchStartRecommendationsResponse) => void): Request<DMS.Types.BatchStartRecommendationsResponse, AWSError>;
  /**
   * Cancels a single premigration assessment run. This operation prevents any individual assessments from running if they haven't started running. It also attempts to cancel any individual assessments that are currently running.
   */
  cancelReplicationTaskAssessmentRun(params: DMS.Types.CancelReplicationTaskAssessmentRunMessage, callback?: (err: AWSError, data: DMS.Types.CancelReplicationTaskAssessmentRunResponse) => void): Request<DMS.Types.CancelReplicationTaskAssessmentRunResponse, AWSError>;
  /**
   * Cancels a single premigration assessment run. This operation prevents any individual assessments from running if they haven't started running. It also attempts to cancel any individual assessments that are currently running.
   */
  cancelReplicationTaskAssessmentRun(callback?: (err: AWSError, data: DMS.Types.CancelReplicationTaskAssessmentRunResponse) => void): Request<DMS.Types.CancelReplicationTaskAssessmentRunResponse, AWSError>;
  /**
   * Creates a data provider using the provided settings. A data provider stores a data store type and location information about your database. 
   */
  createDataProvider(params: DMS.Types.CreateDataProviderMessage, callback?: (err: AWSError, data: DMS.Types.CreateDataProviderResponse) => void): Request<DMS.Types.CreateDataProviderResponse, AWSError>;
  /**
   * Creates a data provider using the provided settings. A data provider stores a data store type and location information about your database. 
   */
  createDataProvider(callback?: (err: AWSError, data: DMS.Types.CreateDataProviderResponse) => void): Request<DMS.Types.CreateDataProviderResponse, AWSError>;
  /**
   * Creates an endpoint using the provided settings.  For a MySQL source or target endpoint, don't explicitly specify the database using the DatabaseName request parameter on the CreateEndpoint API call. Specifying DatabaseName when you create a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task. 
   */
  createEndpoint(params: DMS.Types.CreateEndpointMessage, callback?: (err: AWSError, data: DMS.Types.CreateEndpointResponse) => void): Request<DMS.Types.CreateEndpointResponse, AWSError>;
  /**
   * Creates an endpoint using the provided settings.  For a MySQL source or target endpoint, don't explicitly specify the database using the DatabaseName request parameter on the CreateEndpoint API call. Specifying DatabaseName when you create a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task. 
   */
  createEndpoint(callback?: (err: AWSError, data: DMS.Types.CreateEndpointResponse) => void): Request<DMS.Types.CreateEndpointResponse, AWSError>;
  /**
   *  Creates an DMS event notification subscription.  You can specify the type of source (SourceType) you want to be notified of, provide a list of DMS source IDs (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. If you specify both the SourceType and SourceIds, such as SourceType = replication-instance and SourceIdentifier = my-replinstance, you will be notified of all the replication instance events for the specified source. If you specify a SourceType but don't specify a SourceIdentifier, you receive notice of the events for that source type for all your DMS sources. If you don't specify either SourceType nor SourceIdentifier, you will be notified of events generated from all DMS sources belonging to your customer account. For more information about DMS events, see Working with Events and Notifications in the Database Migration Service User Guide. 
   */
  createEventSubscription(params: DMS.Types.CreateEventSubscriptionMessage, callback?: (err: AWSError, data: DMS.Types.CreateEventSubscriptionResponse) => void): Request<DMS.Types.CreateEventSubscriptionResponse, AWSError>;
  /**
   *  Creates an DMS event notification subscription.  You can specify the type of source (SourceType) you want to be notified of, provide a list of DMS source IDs (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. If you specify both the SourceType and SourceIds, such as SourceType = replication-instance and SourceIdentifier = my-replinstance, you will be notified of all the replication instance events for the specified source. If you specify a SourceType but don't specify a SourceIdentifier, you receive notice of the events for that source type for all your DMS sources. If you don't specify either SourceType nor SourceIdentifier, you will be notified of events generated from all DMS sources belonging to your customer account. For more information about DMS events, see Working with Events and Notifications in the Database Migration Service User Guide. 
   */
  createEventSubscription(callback?: (err: AWSError, data: DMS.Types.CreateEventSubscriptionResponse) => void): Request<DMS.Types.CreateEventSubscriptionResponse, AWSError>;
  /**
   * Creates a Fleet Advisor collector using the specified parameters.
   */
  createFleetAdvisorCollector(params: DMS.Types.CreateFleetAdvisorCollectorRequest, callback?: (err: AWSError, data: DMS.Types.CreateFleetAdvisorCollectorResponse) => void): Request<DMS.Types.CreateFleetAdvisorCollectorResponse, AWSError>;
  /**
   * Creates a Fleet Advisor collector using the specified parameters.
   */
  createFleetAdvisorCollector(callback?: (err: AWSError, data: DMS.Types.CreateFleetAdvisorCollectorResponse) => void): Request<DMS.Types.CreateFleetAdvisorCollectorResponse, AWSError>;
  /**
   * Creates the instance profile using the specified parameters.
   */
  createInstanceProfile(params: DMS.Types.CreateInstanceProfileMessage, callback?: (err: AWSError, data: DMS.Types.CreateInstanceProfileResponse) => void): Request<DMS.Types.CreateInstanceProfileResponse, AWSError>;
  /**
   * Creates the instance profile using the specified parameters.
   */
  createInstanceProfile(callback?: (err: AWSError, data: DMS.Types.CreateInstanceProfileResponse) => void): Request<DMS.Types.CreateInstanceProfileResponse, AWSError>;
  /**
   * Creates the migration project using the specified parameters. You can run this action only after you create an instance profile and data providers using CreateInstanceProfile and CreateDataProvider.
   */
  createMigrationProject(params: DMS.Types.CreateMigrationProjectMessage, callback?: (err: AWSError, data: DMS.Types.CreateMigrationProjectResponse) => void): Request<DMS.Types.CreateMigrationProjectResponse, AWSError>;
  /**
   * Creates the migration project using the specified parameters. You can run this action only after you create an instance profile and data providers using CreateInstanceProfile and CreateDataProvider.
   */
  createMigrationProject(callback?: (err: AWSError, data: DMS.Types.CreateMigrationProjectResponse) => void): Request<DMS.Types.CreateMigrationProjectResponse, AWSError>;
  /**
   * Creates a configuration that you can later provide to configure and start an DMS Serverless replication. You can also provide options to validate the configuration inputs before you start the replication.
   */
  createReplicationConfig(params: DMS.Types.CreateReplicationConfigMessage, callback?: (err: AWSError, data: DMS.Types.CreateReplicationConfigResponse) => void): Request<DMS.Types.CreateReplicationConfigResponse, AWSError>;
  /**
   * Creates a configuration that you can later provide to configure and start an DMS Serverless replication. You can also provide options to validate the configuration inputs before you start the replication.
   */
  createReplicationConfig(callback?: (err: AWSError, data: DMS.Types.CreateReplicationConfigResponse) => void): Request<DMS.Types.CreateReplicationConfigResponse, AWSError>;
  /**
   * Creates the replication instance using the specified parameters. DMS requires that your account have certain roles with appropriate permissions before you can create a replication instance. For information on the required roles, see Creating the IAM Roles to Use With the CLI and DMS API. For information on the required permissions, see IAM Permissions Needed to Use DMS.  If you don't specify a version when creating a replication instance, DMS will create the instance using the default engine version. For information about the default engine version, see Release Notes. 
   */
  createReplicationInstance(params: DMS.Types.CreateReplicationInstanceMessage, callback?: (err: AWSError, data: DMS.Types.CreateReplicationInstanceResponse) => void): Request<DMS.Types.CreateReplicationInstanceResponse, AWSError>;
  /**
   * Creates the replication instance using the specified parameters. DMS requires that your account have certain roles with appropriate permissions before you can create a replication instance. For information on the required roles, see Creating the IAM Roles to Use With the CLI and DMS API. For information on the required permissions, see IAM Permissions Needed to Use DMS.  If you don't specify a version when creating a replication instance, DMS will create the instance using the default engine version. For information about the default engine version, see Release Notes. 
   */
  createReplicationInstance(callback?: (err: AWSError, data: DMS.Types.CreateReplicationInstanceResponse) => void): Request<DMS.Types.CreateReplicationInstanceResponse, AWSError>;
  /**
   * Creates a replication subnet group given a list of the subnet IDs in a VPC. The VPC needs to have at least one subnet in at least two availability zones in the Amazon Web Services Region, otherwise the service will throw a ReplicationSubnetGroupDoesNotCoverEnoughAZs exception. If a replication subnet group exists in your Amazon Web Services account, the CreateReplicationSubnetGroup action returns the following error message: The Replication Subnet Group already exists. In this case, delete the existing replication subnet group. To do so, use the DeleteReplicationSubnetGroup action. Optionally, choose Subnet groups in the DMS console, then choose your subnet group. Next, choose Delete from Actions.
   */
  createReplicationSubnetGroup(params: DMS.Types.CreateReplicationSubnetGroupMessage, callback?: (err: AWSError, data: DMS.Types.CreateReplicationSubnetGroupResponse) => void): Request<DMS.Types.CreateReplicationSubnetGroupResponse, AWSError>;
  /**
   * Creates a replication subnet group given a list of the subnet IDs in a VPC. The VPC needs to have at least one subnet in at least two availability zones in the Amazon Web Services Region, otherwise the service will throw a ReplicationSubnetGroupDoesNotCoverEnoughAZs exception. If a replication subnet group exists in your Amazon Web Services account, the CreateReplicationSubnetGroup action returns the following error message: The Replication Subnet Group already exists. In this case, delete the existing replication subnet group. To do so, use the DeleteReplicationSubnetGroup action. Optionally, choose Subnet groups in the DMS console, then choose your subnet group. Next, choose Delete from Actions.
   */
  createReplicationSubnetGroup(callback?: (err: AWSError, data: DMS.Types.CreateReplicationSubnetGroupResponse) => void): Request<DMS.Types.CreateReplicationSubnetGroupResponse, AWSError>;
  /**
   * Creates a replication task using the specified parameters.
   */
  createReplicationTask(params: DMS.Types.CreateReplicationTaskMessage, callback?: (err: AWSError, data: DMS.Types.CreateReplicationTaskResponse) => void): Request<DMS.Types.CreateReplicationTaskResponse, AWSError>;
  /**
   * Creates a replication task using the specified parameters.
   */
  createReplicationTask(callback?: (err: AWSError, data: DMS.Types.CreateReplicationTaskResponse) => void): Request<DMS.Types.CreateReplicationTaskResponse, AWSError>;
  /**
   * Deletes the specified certificate. 
   */
  deleteCertificate(params: DMS.Types.DeleteCertificateMessage, callback?: (err: AWSError, data: DMS.Types.DeleteCertificateResponse) => void): Request<DMS.Types.DeleteCertificateResponse, AWSError>;
  /**
   * Deletes the specified certificate. 
   */
  deleteCertificate(callback?: (err: AWSError, data: DMS.Types.DeleteCertificateResponse) => void): Request<DMS.Types.DeleteCertificateResponse, AWSError>;
  /**
   * Deletes the connection between a replication instance and an endpoint.
   */
  deleteConnection(params: DMS.Types.DeleteConnectionMessage, callback?: (err: AWSError, data: DMS.Types.DeleteConnectionResponse) => void): Request<DMS.Types.DeleteConnectionResponse, AWSError>;
  /**
   * Deletes the connection between a replication instance and an endpoint.
   */
  deleteConnection(callback?: (err: AWSError, data: DMS.Types.DeleteConnectionResponse) => void): Request<DMS.Types.DeleteConnectionResponse, AWSError>;
  /**
   * Deletes the specified data provider.  All migration projects associated with the data provider must be deleted or modified before you can delete the data provider. 
   */
  deleteDataProvider(params: DMS.Types.DeleteDataProviderMessage, callback?: (err: AWSError, data: DMS.Types.DeleteDataProviderResponse) => void): Request<DMS.Types.DeleteDataProviderResponse, AWSError>;
  /**
   * Deletes the specified data provider.  All migration projects associated with the data provider must be deleted or modified before you can delete the data provider. 
   */
  deleteDataProvider(callback?: (err: AWSError, data: DMS.Types.DeleteDataProviderResponse) => void): Request<DMS.Types.DeleteDataProviderResponse, AWSError>;
  /**
   * Deletes the specified endpoint.  All tasks associated with the endpoint must be deleted before you can delete the endpoint.  
   */
  deleteEndpoint(params: DMS.Types.DeleteEndpointMessage, callback?: (err: AWSError, data: DMS.Types.DeleteEndpointResponse) => void): Request<DMS.Types.DeleteEndpointResponse, AWSError>;
  /**
   * Deletes the specified endpoint.  All tasks associated with the endpoint must be deleted before you can delete the endpoint.  
   */
  deleteEndpoint(callback?: (err: AWSError, data: DMS.Types.DeleteEndpointResponse) => void): Request<DMS.Types.DeleteEndpointResponse, AWSError>;
  /**
   *  Deletes an DMS event subscription. 
   */
  deleteEventSubscription(params: DMS.Types.DeleteEventSubscriptionMessage, callback?: (err: AWSError, data: DMS.Types.DeleteEventSubscriptionResponse) => void): Request<DMS.Types.DeleteEventSubscriptionResponse, AWSError>;
  /**
   *  Deletes an DMS event subscription. 
   */
  deleteEventSubscription(callback?: (err: AWSError, data: DMS.Types.DeleteEventSubscriptionResponse) => void): Request<DMS.Types.DeleteEventSubscriptionResponse, AWSError>;
  /**
   * Deletes the specified Fleet Advisor collector.
   */
  deleteFleetAdvisorCollector(params: DMS.Types.DeleteCollectorRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified Fleet Advisor collector.
   */
  deleteFleetAdvisorCollector(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified Fleet Advisor collector databases.
   */
  deleteFleetAdvisorDatabases(params: DMS.Types.DeleteFleetAdvisorDatabasesRequest, callback?: (err: AWSError, data: DMS.Types.DeleteFleetAdvisorDatabasesResponse) => void): Request<DMS.Types.DeleteFleetAdvisorDatabasesResponse, AWSError>;
  /**
   * Deletes the specified Fleet Advisor collector databases.
   */
  deleteFleetAdvisorDatabases(callback?: (err: AWSError, data: DMS.Types.DeleteFleetAdvisorDatabasesResponse) => void): Request<DMS.Types.DeleteFleetAdvisorDatabasesResponse, AWSError>;
  /**
   * Deletes the specified instance profile.  All migration projects associated with the instance profile must be deleted or modified before you can delete the instance profile. 
   */
  deleteInstanceProfile(params: DMS.Types.DeleteInstanceProfileMessage, callback?: (err: AWSError, data: DMS.Types.DeleteInstanceProfileResponse) => void): Request<DMS.Types.DeleteInstanceProfileResponse, AWSError>;
  /**
   * Deletes the specified instance profile.  All migration projects associated with the instance profile must be deleted or modified before you can delete the instance profile. 
   */
  deleteInstanceProfile(callback?: (err: AWSError, data: DMS.Types.DeleteInstanceProfileResponse) => void): Request<DMS.Types.DeleteInstanceProfileResponse, AWSError>;
  /**
   * Deletes the specified migration project.  The migration project must be closed before you can delete it. 
   */
  deleteMigrationProject(params: DMS.Types.DeleteMigrationProjectMessage, callback?: (err: AWSError, data: DMS.Types.DeleteMigrationProjectResponse) => void): Request<DMS.Types.DeleteMigrationProjectResponse, AWSError>;
  /**
   * Deletes the specified migration project.  The migration project must be closed before you can delete it. 
   */
  deleteMigrationProject(callback?: (err: AWSError, data: DMS.Types.DeleteMigrationProjectResponse) => void): Request<DMS.Types.DeleteMigrationProjectResponse, AWSError>;
  /**
   * Deletes an DMS Serverless replication configuration. This effectively deprovisions any and all replications that use this configuration. You can't delete the configuration for an DMS Serverless replication that is ongoing. You can delete the configuration when the replication is in a non-RUNNING and non-STARTING state.
   */
  deleteReplicationConfig(params: DMS.Types.DeleteReplicationConfigMessage, callback?: (err: AWSError, data: DMS.Types.DeleteReplicationConfigResponse) => void): Request<DMS.Types.DeleteReplicationConfigResponse, AWSError>;
  /**
   * Deletes an DMS Serverless replication configuration. This effectively deprovisions any and all replications that use this configuration. You can't delete the configuration for an DMS Serverless replication that is ongoing. You can delete the configuration when the replication is in a non-RUNNING and non-STARTING state.
   */
  deleteReplicationConfig(callback?: (err: AWSError, data: DMS.Types.DeleteReplicationConfigResponse) => void): Request<DMS.Types.DeleteReplicationConfigResponse, AWSError>;
  /**
   * Deletes the specified replication instance.  You must delete any migration tasks that are associated with the replication instance before you can delete it.  
   */
  deleteReplicationInstance(params: DMS.Types.DeleteReplicationInstanceMessage, callback?: (err: AWSError, data: DMS.Types.DeleteReplicationInstanceResponse) => void): Request<DMS.Types.DeleteReplicationInstanceResponse, AWSError>;
  /**
   * Deletes the specified replication instance.  You must delete any migration tasks that are associated with the replication instance before you can delete it.  
   */
  deleteReplicationInstance(callback?: (err: AWSError, data: DMS.Types.DeleteReplicationInstanceResponse) => void): Request<DMS.Types.DeleteReplicationInstanceResponse, AWSError>;
  /**
   * Deletes a subnet group.
   */
  deleteReplicationSubnetGroup(params: DMS.Types.DeleteReplicationSubnetGroupMessage, callback?: (err: AWSError, data: DMS.Types.DeleteReplicationSubnetGroupResponse) => void): Request<DMS.Types.DeleteReplicationSubnetGroupResponse, AWSError>;
  /**
   * Deletes a subnet group.
   */
  deleteReplicationSubnetGroup(callback?: (err: AWSError, data: DMS.Types.DeleteReplicationSubnetGroupResponse) => void): Request<DMS.Types.DeleteReplicationSubnetGroupResponse, AWSError>;
  /**
   * Deletes the specified replication task.
   */
  deleteReplicationTask(params: DMS.Types.DeleteReplicationTaskMessage, callback?: (err: AWSError, data: DMS.Types.DeleteReplicationTaskResponse) => void): Request<DMS.Types.DeleteReplicationTaskResponse, AWSError>;
  /**
   * Deletes the specified replication task.
   */
  deleteReplicationTask(callback?: (err: AWSError, data: DMS.Types.DeleteReplicationTaskResponse) => void): Request<DMS.Types.DeleteReplicationTaskResponse, AWSError>;
  /**
   * Deletes the record of a single premigration assessment run. This operation removes all metadata that DMS maintains about this assessment run. However, the operation leaves untouched all information about this assessment run that is stored in your Amazon S3 bucket.
   */
  deleteReplicationTaskAssessmentRun(params: DMS.Types.DeleteReplicationTaskAssessmentRunMessage, callback?: (err: AWSError, data: DMS.Types.DeleteReplicationTaskAssessmentRunResponse) => void): Request<DMS.Types.DeleteReplicationTaskAssessmentRunResponse, AWSError>;
  /**
   * Deletes the record of a single premigration assessment run. This operation removes all metadata that DMS maintains about this assessment run. However, the operation leaves untouched all information about this assessment run that is stored in your Amazon S3 bucket.
   */
  deleteReplicationTaskAssessmentRun(callback?: (err: AWSError, data: DMS.Types.DeleteReplicationTaskAssessmentRunResponse) => void): Request<DMS.Types.DeleteReplicationTaskAssessmentRunResponse, AWSError>;
  /**
   * Lists all of the DMS attributes for a customer account. These attributes include DMS quotas for the account and a unique account identifier in a particular DMS region. DMS quotas include a list of resource quotas supported by the account, such as the number of replication instances allowed. The description for each resource quota, includes the quota name, current usage toward that quota, and the quota's maximum value. DMS uses the unique account identifier to name each artifact used by DMS in the given region. This command does not take any parameters.
   */
  describeAccountAttributes(params: DMS.Types.DescribeAccountAttributesMessage, callback?: (err: AWSError, data: DMS.Types.DescribeAccountAttributesResponse) => void): Request<DMS.Types.DescribeAccountAttributesResponse, AWSError>;
  /**
   * Lists all of the DMS attributes for a customer account. These attributes include DMS quotas for the account and a unique account identifier in a particular DMS region. DMS quotas include a list of resource quotas supported by the account, such as the number of replication instances allowed. The description for each resource quota, includes the quota name, current usage toward that quota, and the quota's maximum value. DMS uses the unique account identifier to name each artifact used by DMS in the given region. This command does not take any parameters.
   */
  describeAccountAttributes(callback?: (err: AWSError, data: DMS.Types.DescribeAccountAttributesResponse) => void): Request<DMS.Types.DescribeAccountAttributesResponse, AWSError>;
  /**
   * Provides a list of individual assessments that you can specify for a new premigration assessment run, given one or more parameters. If you specify an existing migration task, this operation provides the default individual assessments you can specify for that task. Otherwise, the specified parameters model elements of a possible migration task on which to base a premigration assessment run. To use these migration task modeling parameters, you must specify an existing replication instance, a source database engine, a target database engine, and a migration type. This combination of parameters potentially limits the default individual assessments available for an assessment run created for a corresponding migration task. If you specify no parameters, this operation provides a list of all possible individual assessments that you can specify for an assessment run. If you specify any one of the task modeling parameters, you must specify all of them or the operation cannot provide a list of individual assessments. The only parameter that you can specify alone is for an existing migration task. The specified task definition then determines the default list of individual assessments that you can specify in an assessment run for the task.
   */
  describeApplicableIndividualAssessments(params: DMS.Types.DescribeApplicableIndividualAssessmentsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeApplicableIndividualAssessmentsResponse) => void): Request<DMS.Types.DescribeApplicableIndividualAssessmentsResponse, AWSError>;
  /**
   * Provides a list of individual assessments that you can specify for a new premigration assessment run, given one or more parameters. If you specify an existing migration task, this operation provides the default individual assessments you can specify for that task. Otherwise, the specified parameters model elements of a possible migration task on which to base a premigration assessment run. To use these migration task modeling parameters, you must specify an existing replication instance, a source database engine, a target database engine, and a migration type. This combination of parameters potentially limits the default individual assessments available for an assessment run created for a corresponding migration task. If you specify no parameters, this operation provides a list of all possible individual assessments that you can specify for an assessment run. If you specify any one of the task modeling parameters, you must specify all of them or the operation cannot provide a list of individual assessments. The only parameter that you can specify alone is for an existing migration task. The specified task definition then determines the default list of individual assessments that you can specify in an assessment run for the task.
   */
  describeApplicableIndividualAssessments(callback?: (err: AWSError, data: DMS.Types.DescribeApplicableIndividualAssessmentsResponse) => void): Request<DMS.Types.DescribeApplicableIndividualAssessmentsResponse, AWSError>;
  /**
   * Provides a description of the certificate.
   */
  describeCertificates(params: DMS.Types.DescribeCertificatesMessage, callback?: (err: AWSError, data: DMS.Types.DescribeCertificatesResponse) => void): Request<DMS.Types.DescribeCertificatesResponse, AWSError>;
  /**
   * Provides a description of the certificate.
   */
  describeCertificates(callback?: (err: AWSError, data: DMS.Types.DescribeCertificatesResponse) => void): Request<DMS.Types.DescribeCertificatesResponse, AWSError>;
  /**
   * Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.
   */
  describeConnections(params: DMS.Types.DescribeConnectionsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeConnectionsResponse) => void): Request<DMS.Types.DescribeConnectionsResponse, AWSError>;
  /**
   * Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.
   */
  describeConnections(callback?: (err: AWSError, data: DMS.Types.DescribeConnectionsResponse) => void): Request<DMS.Types.DescribeConnectionsResponse, AWSError>;
  /**
   * Returns configuration parameters for a schema conversion project.
   */
  describeConversionConfiguration(params: DMS.Types.DescribeConversionConfigurationMessage, callback?: (err: AWSError, data: DMS.Types.DescribeConversionConfigurationResponse) => void): Request<DMS.Types.DescribeConversionConfigurationResponse, AWSError>;
  /**
   * Returns configuration parameters for a schema conversion project.
   */
  describeConversionConfiguration(callback?: (err: AWSError, data: DMS.Types.DescribeConversionConfigurationResponse) => void): Request<DMS.Types.DescribeConversionConfigurationResponse, AWSError>;
  /**
   * Returns a paginated list of data providers for your account in the current region.
   */
  describeDataProviders(params: DMS.Types.DescribeDataProvidersMessage, callback?: (err: AWSError, data: DMS.Types.DescribeDataProvidersResponse) => void): Request<DMS.Types.DescribeDataProvidersResponse, AWSError>;
  /**
   * Returns a paginated list of data providers for your account in the current region.
   */
  describeDataProviders(callback?: (err: AWSError, data: DMS.Types.DescribeDataProvidersResponse) => void): Request<DMS.Types.DescribeDataProvidersResponse, AWSError>;
  /**
   * Returns information about the possible endpoint settings available when you create an endpoint for a specific database engine.
   */
  describeEndpointSettings(params: DMS.Types.DescribeEndpointSettingsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeEndpointSettingsResponse) => void): Request<DMS.Types.DescribeEndpointSettingsResponse, AWSError>;
  /**
   * Returns information about the possible endpoint settings available when you create an endpoint for a specific database engine.
   */
  describeEndpointSettings(callback?: (err: AWSError, data: DMS.Types.DescribeEndpointSettingsResponse) => void): Request<DMS.Types.DescribeEndpointSettingsResponse, AWSError>;
  /**
   * Returns information about the type of endpoints available.
   */
  describeEndpointTypes(params: DMS.Types.DescribeEndpointTypesMessage, callback?: (err: AWSError, data: DMS.Types.DescribeEndpointTypesResponse) => void): Request<DMS.Types.DescribeEndpointTypesResponse, AWSError>;
  /**
   * Returns information about the type of endpoints available.
   */
  describeEndpointTypes(callback?: (err: AWSError, data: DMS.Types.DescribeEndpointTypesResponse) => void): Request<DMS.Types.DescribeEndpointTypesResponse, AWSError>;
  /**
   * Returns information about the endpoints for your account in the current region.
   */
  describeEndpoints(params: DMS.Types.DescribeEndpointsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeEndpointsResponse) => void): Request<DMS.Types.DescribeEndpointsResponse, AWSError>;
  /**
   * Returns information about the endpoints for your account in the current region.
   */
  describeEndpoints(callback?: (err: AWSError, data: DMS.Types.DescribeEndpointsResponse) => void): Request<DMS.Types.DescribeEndpointsResponse, AWSError>;
  /**
   * Returns information about the replication instance versions used in the project.
   */
  describeEngineVersions(params: DMS.Types.DescribeEngineVersionsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeEngineVersionsResponse) => void): Request<DMS.Types.DescribeEngineVersionsResponse, AWSError>;
  /**
   * Returns information about the replication instance versions used in the project.
   */
  describeEngineVersions(callback?: (err: AWSError, data: DMS.Types.DescribeEngineVersionsResponse) => void): Request<DMS.Types.DescribeEngineVersionsResponse, AWSError>;
  /**
   * Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in Working with Events and Notifications in the Database Migration Service User Guide. 
   */
  describeEventCategories(params: DMS.Types.DescribeEventCategoriesMessage, callback?: (err: AWSError, data: DMS.Types.DescribeEventCategoriesResponse) => void): Request<DMS.Types.DescribeEventCategoriesResponse, AWSError>;
  /**
   * Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in Working with Events and Notifications in the Database Migration Service User Guide. 
   */
  describeEventCategories(callback?: (err: AWSError, data: DMS.Types.DescribeEventCategoriesResponse) => void): Request<DMS.Types.DescribeEventCategoriesResponse, AWSError>;
  /**
   * Lists all the event subscriptions for a customer account. The description of a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.  If you specify SubscriptionName, this action lists the description for that subscription.
   */
  describeEventSubscriptions(params: DMS.Types.DescribeEventSubscriptionsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeEventSubscriptionsResponse) => void): Request<DMS.Types.DescribeEventSubscriptionsResponse, AWSError>;
  /**
   * Lists all the event subscriptions for a customer account. The description of a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.  If you specify SubscriptionName, this action lists the description for that subscription.
   */
  describeEventSubscriptions(callback?: (err: AWSError, data: DMS.Types.DescribeEventSubscriptionsResponse) => void): Request<DMS.Types.DescribeEventSubscriptionsResponse, AWSError>;
  /**
   *  Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on DMS events, see Working with Events and Notifications in the Database Migration Service User Guide. 
   */
  describeEvents(params: DMS.Types.DescribeEventsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeEventsResponse) => void): Request<DMS.Types.DescribeEventsResponse, AWSError>;
  /**
   *  Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on DMS events, see Working with Events and Notifications in the Database Migration Service User Guide. 
   */
  describeEvents(callback?: (err: AWSError, data: DMS.Types.DescribeEventsResponse) => void): Request<DMS.Types.DescribeEventsResponse, AWSError>;
  /**
   * Returns a paginated list of extension pack associations for the specified migration project. An extension pack is an add-on module that emulates functions present in a source database that are required when converting objects to the target database.
   */
  describeExtensionPackAssociations(params: DMS.Types.DescribeExtensionPackAssociationsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeExtensionPackAssociationsResponse) => void): Request<DMS.Types.DescribeExtensionPackAssociationsResponse, AWSError>;
  /**
   * Returns a paginated list of extension pack associations for the specified migration project. An extension pack is an add-on module that emulates functions present in a source database that are required when converting objects to the target database.
   */
  describeExtensionPackAssociations(callback?: (err: AWSError, data: DMS.Types.DescribeExtensionPackAssociationsResponse) => void): Request<DMS.Types.DescribeExtensionPackAssociationsResponse, AWSError>;
  /**
   * Returns a list of the Fleet Advisor collectors in your account.
   */
  describeFleetAdvisorCollectors(params: DMS.Types.DescribeFleetAdvisorCollectorsRequest, callback?: (err: AWSError, data: DMS.Types.DescribeFleetAdvisorCollectorsResponse) => void): Request<DMS.Types.DescribeFleetAdvisorCollectorsResponse, AWSError>;
  /**
   * Returns a list of the Fleet Advisor collectors in your account.
   */
  describeFleetAdvisorCollectors(callback?: (err: AWSError, data: DMS.Types.DescribeFleetAdvisorCollectorsResponse) => void): Request<DMS.Types.DescribeFleetAdvisorCollectorsResponse, AWSError>;
  /**
   * Returns a list of Fleet Advisor databases in your account.
   */
  describeFleetAdvisorDatabases(params: DMS.Types.DescribeFleetAdvisorDatabasesRequest, callback?: (err: AWSError, data: DMS.Types.DescribeFleetAdvisorDatabasesResponse) => void): Request<DMS.Types.DescribeFleetAdvisorDatabasesResponse, AWSError>;
  /**
   * Returns a list of Fleet Advisor databases in your account.
   */
  describeFleetAdvisorDatabases(callback?: (err: AWSError, data: DMS.Types.DescribeFleetAdvisorDatabasesResponse) => void): Request<DMS.Types.DescribeFleetAdvisorDatabasesResponse, AWSError>;
  /**
   * Provides descriptions of large-scale assessment (LSA) analyses produced by your Fleet Advisor collectors. 
   */
  describeFleetAdvisorLsaAnalysis(params: DMS.Types.DescribeFleetAdvisorLsaAnalysisRequest, callback?: (err: AWSError, data: DMS.Types.DescribeFleetAdvisorLsaAnalysisResponse) => void): Request<DMS.Types.DescribeFleetAdvisorLsaAnalysisResponse, AWSError>;
  /**
   * Provides descriptions of large-scale assessment (LSA) analyses produced by your Fleet Advisor collectors. 
   */
  describeFleetAdvisorLsaAnalysis(callback?: (err: AWSError, data: DMS.Types.DescribeFleetAdvisorLsaAnalysisResponse) => void): Request<DMS.Types.DescribeFleetAdvisorLsaAnalysisResponse, AWSError>;
  /**
   * Provides descriptions of the schemas discovered by your Fleet Advisor collectors.
   */
  describeFleetAdvisorSchemaObjectSummary(params: DMS.Types.DescribeFleetAdvisorSchemaObjectSummaryRequest, callback?: (err: AWSError, data: DMS.Types.DescribeFleetAdvisorSchemaObjectSummaryResponse) => void): Request<DMS.Types.DescribeFleetAdvisorSchemaObjectSummaryResponse, AWSError>;
  /**
   * Provides descriptions of the schemas discovered by your Fleet Advisor collectors.
   */
  describeFleetAdvisorSchemaObjectSummary(callback?: (err: AWSError, data: DMS.Types.DescribeFleetAdvisorSchemaObjectSummaryResponse) => void): Request<DMS.Types.DescribeFleetAdvisorSchemaObjectSummaryResponse, AWSError>;
  /**
   * Returns a list of schemas detected by Fleet Advisor Collectors in your account.
   */
  describeFleetAdvisorSchemas(params: DMS.Types.DescribeFleetAdvisorSchemasRequest, callback?: (err: AWSError, data: DMS.Types.DescribeFleetAdvisorSchemasResponse) => void): Request<DMS.Types.DescribeFleetAdvisorSchemasResponse, AWSError>;
  /**
   * Returns a list of schemas detected by Fleet Advisor Collectors in your account.
   */
  describeFleetAdvisorSchemas(callback?: (err: AWSError, data: DMS.Types.DescribeFleetAdvisorSchemasResponse) => void): Request<DMS.Types.DescribeFleetAdvisorSchemasResponse, AWSError>;
  /**
   * Returns a paginated list of instance profiles for your account in the current region.
   */
  describeInstanceProfiles(params: DMS.Types.DescribeInstanceProfilesMessage, callback?: (err: AWSError, data: DMS.Types.DescribeInstanceProfilesResponse) => void): Request<DMS.Types.DescribeInstanceProfilesResponse, AWSError>;
  /**
   * Returns a paginated list of instance profiles for your account in the current region.
   */
  describeInstanceProfiles(callback?: (err: AWSError, data: DMS.Types.DescribeInstanceProfilesResponse) => void): Request<DMS.Types.DescribeInstanceProfilesResponse, AWSError>;
  /**
   * Returns a paginated list of metadata model assessments for your account in the current region.
   */
  describeMetadataModelAssessments(params: DMS.Types.DescribeMetadataModelAssessmentsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeMetadataModelAssessmentsResponse) => void): Request<DMS.Types.DescribeMetadataModelAssessmentsResponse, AWSError>;
  /**
   * Returns a paginated list of metadata model assessments for your account in the current region.
   */
  describeMetadataModelAssessments(callback?: (err: AWSError, data: DMS.Types.DescribeMetadataModelAssessmentsResponse) => void): Request<DMS.Types.DescribeMetadataModelAssessmentsResponse, AWSError>;
  /**
   * Returns a paginated list of metadata model conversions for a migration project.
   */
  describeMetadataModelConversions(params: DMS.Types.DescribeMetadataModelConversionsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeMetadataModelConversionsResponse) => void): Request<DMS.Types.DescribeMetadataModelConversionsResponse, AWSError>;
  /**
   * Returns a paginated list of metadata model conversions for a migration project.
   */
  describeMetadataModelConversions(callback?: (err: AWSError, data: DMS.Types.DescribeMetadataModelConversionsResponse) => void): Request<DMS.Types.DescribeMetadataModelConversionsResponse, AWSError>;
  /**
   * Returns a paginated list of metadata model exports.
   */
  describeMetadataModelExportsAsScript(params: DMS.Types.DescribeMetadataModelExportsAsScriptMessage, callback?: (err: AWSError, data: DMS.Types.DescribeMetadataModelExportsAsScriptResponse) => void): Request<DMS.Types.DescribeMetadataModelExportsAsScriptResponse, AWSError>;
  /**
   * Returns a paginated list of metadata model exports.
   */
  describeMetadataModelExportsAsScript(callback?: (err: AWSError, data: DMS.Types.DescribeMetadataModelExportsAsScriptResponse) => void): Request<DMS.Types.DescribeMetadataModelExportsAsScriptResponse, AWSError>;
  /**
   * Returns a paginated list of metadata model exports.
   */
  describeMetadataModelExportsToTarget(params: DMS.Types.DescribeMetadataModelExportsToTargetMessage, callback?: (err: AWSError, data: DMS.Types.DescribeMetadataModelExportsToTargetResponse) => void): Request<DMS.Types.DescribeMetadataModelExportsToTargetResponse, AWSError>;
  /**
   * Returns a paginated list of metadata model exports.
   */
  describeMetadataModelExportsToTarget(callback?: (err: AWSError, data: DMS.Types.DescribeMetadataModelExportsToTargetResponse) => void): Request<DMS.Types.DescribeMetadataModelExportsToTargetResponse, AWSError>;
  /**
   * Returns a paginated list of metadata model imports.
   */
  describeMetadataModelImports(params: DMS.Types.DescribeMetadataModelImportsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeMetadataModelImportsResponse) => void): Request<DMS.Types.DescribeMetadataModelImportsResponse, AWSError>;
  /**
   * Returns a paginated list of metadata model imports.
   */
  describeMetadataModelImports(callback?: (err: AWSError, data: DMS.Types.DescribeMetadataModelImportsResponse) => void): Request<DMS.Types.DescribeMetadataModelImportsResponse, AWSError>;
  /**
   * Returns a paginated list of migration projects for your account in the current region.
   */
  describeMigrationProjects(params: DMS.Types.DescribeMigrationProjectsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeMigrationProjectsResponse) => void): Request<DMS.Types.DescribeMigrationProjectsResponse, AWSError>;
  /**
   * Returns a paginated list of migration projects for your account in the current region.
   */
  describeMigrationProjects(callback?: (err: AWSError, data: DMS.Types.DescribeMigrationProjectsResponse) => void): Request<DMS.Types.DescribeMigrationProjectsResponse, AWSError>;
  /**
   * Returns information about the replication instance types that can be created in the specified region.
   */
  describeOrderableReplicationInstances(params: DMS.Types.DescribeOrderableReplicationInstancesMessage, callback?: (err: AWSError, data: DMS.Types.DescribeOrderableReplicationInstancesResponse) => void): Request<DMS.Types.DescribeOrderableReplicationInstancesResponse, AWSError>;
  /**
   * Returns information about the replication instance types that can be created in the specified region.
   */
  describeOrderableReplicationInstances(callback?: (err: AWSError, data: DMS.Types.DescribeOrderableReplicationInstancesResponse) => void): Request<DMS.Types.DescribeOrderableReplicationInstancesResponse, AWSError>;
  /**
   * For internal use only
   */
  describePendingMaintenanceActions(params: DMS.Types.DescribePendingMaintenanceActionsMessage, callback?: (err: AWSError, data: DMS.Types.DescribePendingMaintenanceActionsResponse) => void): Request<DMS.Types.DescribePendingMaintenanceActionsResponse, AWSError>;
  /**
   * For internal use only
   */
  describePendingMaintenanceActions(callback?: (err: AWSError, data: DMS.Types.DescribePendingMaintenanceActionsResponse) => void): Request<DMS.Types.DescribePendingMaintenanceActionsResponse, AWSError>;
  /**
   * Returns a paginated list of limitations for recommendations of target Amazon Web Services engines.
   */
  describeRecommendationLimitations(params: DMS.Types.DescribeRecommendationLimitationsRequest, callback?: (err: AWSError, data: DMS.Types.DescribeRecommendationLimitationsResponse) => void): Request<DMS.Types.DescribeRecommendationLimitationsResponse, AWSError>;
  /**
   * Returns a paginated list of limitations for recommendations of target Amazon Web Services engines.
   */
  describeRecommendationLimitations(callback?: (err: AWSError, data: DMS.Types.DescribeRecommendationLimitationsResponse) => void): Request<DMS.Types.DescribeRecommendationLimitationsResponse, AWSError>;
  /**
   * Returns a paginated list of target engine recommendations for your source databases.
   */
  describeRecommendations(params: DMS.Types.DescribeRecommendationsRequest, callback?: (err: AWSError, data: DMS.Types.DescribeRecommendationsResponse) => void): Request<DMS.Types.DescribeRecommendationsResponse, AWSError>;
  /**
   * Returns a paginated list of target engine recommendations for your source databases.
   */
  describeRecommendations(callback?: (err: AWSError, data: DMS.Types.DescribeRecommendationsResponse) => void): Request<DMS.Types.DescribeRecommendationsResponse, AWSError>;
  /**
   * Returns the status of the RefreshSchemas operation.
   */
  describeRefreshSchemasStatus(params: DMS.Types.DescribeRefreshSchemasStatusMessage, callback?: (err: AWSError, data: DMS.Types.DescribeRefreshSchemasStatusResponse) => void): Request<DMS.Types.DescribeRefreshSchemasStatusResponse, AWSError>;
  /**
   * Returns the status of the RefreshSchemas operation.
   */
  describeRefreshSchemasStatus(callback?: (err: AWSError, data: DMS.Types.DescribeRefreshSchemasStatusResponse) => void): Request<DMS.Types.DescribeRefreshSchemasStatusResponse, AWSError>;
  /**
   * Returns one or more existing DMS Serverless replication configurations as a list of structures.
   */
  describeReplicationConfigs(params: DMS.Types.DescribeReplicationConfigsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationConfigsResponse) => void): Request<DMS.Types.DescribeReplicationConfigsResponse, AWSError>;
  /**
   * Returns one or more existing DMS Serverless replication configurations as a list of structures.
   */
  describeReplicationConfigs(callback?: (err: AWSError, data: DMS.Types.DescribeReplicationConfigsResponse) => void): Request<DMS.Types.DescribeReplicationConfigsResponse, AWSError>;
  /**
   * Returns information about the task logs for the specified task.
   */
  describeReplicationInstanceTaskLogs(params: DMS.Types.DescribeReplicationInstanceTaskLogsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationInstanceTaskLogsResponse) => void): Request<DMS.Types.DescribeReplicationInstanceTaskLogsResponse, AWSError>;
  /**
   * Returns information about the task logs for the specified task.
   */
  describeReplicationInstanceTaskLogs(callback?: (err: AWSError, data: DMS.Types.DescribeReplicationInstanceTaskLogsResponse) => void): Request<DMS.Types.DescribeReplicationInstanceTaskLogsResponse, AWSError>;
  /**
   * Returns information about replication instances for your account in the current region.
   */
  describeReplicationInstances(params: DMS.Types.DescribeReplicationInstancesMessage, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationInstancesResponse) => void): Request<DMS.Types.DescribeReplicationInstancesResponse, AWSError>;
  /**
   * Returns information about replication instances for your account in the current region.
   */
  describeReplicationInstances(callback?: (err: AWSError, data: DMS.Types.DescribeReplicationInstancesResponse) => void): Request<DMS.Types.DescribeReplicationInstancesResponse, AWSError>;
  /**
   * Returns information about the replication subnet groups.
   */
  describeReplicationSubnetGroups(params: DMS.Types.DescribeReplicationSubnetGroupsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationSubnetGroupsResponse) => void): Request<DMS.Types.DescribeReplicationSubnetGroupsResponse, AWSError>;
  /**
   * Returns information about the replication subnet groups.
   */
  describeReplicationSubnetGroups(callback?: (err: AWSError, data: DMS.Types.DescribeReplicationSubnetGroupsResponse) => void): Request<DMS.Types.DescribeReplicationSubnetGroupsResponse, AWSError>;
  /**
   * Returns table and schema statistics for one or more provisioned replications that use a given DMS Serverless replication configuration.
   */
  describeReplicationTableStatistics(params: DMS.Types.DescribeReplicationTableStatisticsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTableStatisticsResponse) => void): Request<DMS.Types.DescribeReplicationTableStatisticsResponse, AWSError>;
  /**
   * Returns table and schema statistics for one or more provisioned replications that use a given DMS Serverless replication configuration.
   */
  describeReplicationTableStatistics(callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTableStatisticsResponse) => void): Request<DMS.Types.DescribeReplicationTableStatisticsResponse, AWSError>;
  /**
   * Returns the task assessment results from the Amazon S3 bucket that DMS creates in your Amazon Web Services account. This action always returns the latest results. For more information about DMS task assessments, see Creating a task assessment report in the Database Migration Service User Guide.
   */
  describeReplicationTaskAssessmentResults(params: DMS.Types.DescribeReplicationTaskAssessmentResultsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTaskAssessmentResultsResponse) => void): Request<DMS.Types.DescribeReplicationTaskAssessmentResultsResponse, AWSError>;
  /**
   * Returns the task assessment results from the Amazon S3 bucket that DMS creates in your Amazon Web Services account. This action always returns the latest results. For more information about DMS task assessments, see Creating a task assessment report in the Database Migration Service User Guide.
   */
  describeReplicationTaskAssessmentResults(callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTaskAssessmentResultsResponse) => void): Request<DMS.Types.DescribeReplicationTaskAssessmentResultsResponse, AWSError>;
  /**
   * Returns a paginated list of premigration assessment runs based on filter settings. These filter settings can specify a combination of premigration assessment runs, migration tasks, replication instances, and assessment run status values.  This operation doesn't return information about individual assessments. For this information, see the DescribeReplicationTaskIndividualAssessments operation.  
   */
  describeReplicationTaskAssessmentRuns(params: DMS.Types.DescribeReplicationTaskAssessmentRunsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTaskAssessmentRunsResponse) => void): Request<DMS.Types.DescribeReplicationTaskAssessmentRunsResponse, AWSError>;
  /**
   * Returns a paginated list of premigration assessment runs based on filter settings. These filter settings can specify a combination of premigration assessment runs, migration tasks, replication instances, and assessment run status values.  This operation doesn't return information about individual assessments. For this information, see the DescribeReplicationTaskIndividualAssessments operation.  
   */
  describeReplicationTaskAssessmentRuns(callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTaskAssessmentRunsResponse) => void): Request<DMS.Types.DescribeReplicationTaskAssessmentRunsResponse, AWSError>;
  /**
   * Returns a paginated list of individual assessments based on filter settings. These filter settings can specify a combination of premigration assessment runs, migration tasks, and assessment status values.
   */
  describeReplicationTaskIndividualAssessments(params: DMS.Types.DescribeReplicationTaskIndividualAssessmentsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTaskIndividualAssessmentsResponse) => void): Request<DMS.Types.DescribeReplicationTaskIndividualAssessmentsResponse, AWSError>;
  /**
   * Returns a paginated list of individual assessments based on filter settings. These filter settings can specify a combination of premigration assessment runs, migration tasks, and assessment status values.
   */
  describeReplicationTaskIndividualAssessments(callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTaskIndividualAssessmentsResponse) => void): Request<DMS.Types.DescribeReplicationTaskIndividualAssessmentsResponse, AWSError>;
  /**
   * Returns information about replication tasks for your account in the current region.
   */
  describeReplicationTasks(params: DMS.Types.DescribeReplicationTasksMessage, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTasksResponse) => void): Request<DMS.Types.DescribeReplicationTasksResponse, AWSError>;
  /**
   * Returns information about replication tasks for your account in the current region.
   */
  describeReplicationTasks(callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTasksResponse) => void): Request<DMS.Types.DescribeReplicationTasksResponse, AWSError>;
  /**
   * Provides details on replication progress by returning status information for one or more provisioned DMS Serverless replications.
   */
  describeReplications(params: DMS.Types.DescribeReplicationsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationsResponse) => void): Request<DMS.Types.DescribeReplicationsResponse, AWSError>;
  /**
   * Provides details on replication progress by returning status information for one or more provisioned DMS Serverless replications.
   */
  describeReplications(callback?: (err: AWSError, data: DMS.Types.DescribeReplicationsResponse) => void): Request<DMS.Types.DescribeReplicationsResponse, AWSError>;
  /**
   * Returns information about the schema for the specified endpoint. 
   */
  describeSchemas(params: DMS.Types.DescribeSchemasMessage, callback?: (err: AWSError, data: DMS.Types.DescribeSchemasResponse) => void): Request<DMS.Types.DescribeSchemasResponse, AWSError>;
  /**
   * Returns information about the schema for the specified endpoint. 
   */
  describeSchemas(callback?: (err: AWSError, data: DMS.Types.DescribeSchemasResponse) => void): Request<DMS.Types.DescribeSchemasResponse, AWSError>;
  /**
   * Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted. Note that the "last updated" column the DMS console only indicates the time that DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.
   */
  describeTableStatistics(params: DMS.Types.DescribeTableStatisticsMessage, callback?: (err: AWSError, data: DMS.Types.DescribeTableStatisticsResponse) => void): Request<DMS.Types.DescribeTableStatisticsResponse, AWSError>;
  /**
   * Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted. Note that the "last updated" column the DMS console only indicates the time that DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.
   */
  describeTableStatistics(callback?: (err: AWSError, data: DMS.Types.DescribeTableStatisticsResponse) => void): Request<DMS.Types.DescribeTableStatisticsResponse, AWSError>;
  /**
   * Saves a copy of a database migration assessment report to your Amazon S3 bucket. DMS can save your assessment report as a comma-separated value (CSV) or a PDF file. 
   */
  exportMetadataModelAssessment(params: DMS.Types.ExportMetadataModelAssessmentMessage, callback?: (err: AWSError, data: DMS.Types.ExportMetadataModelAssessmentResponse) => void): Request<DMS.Types.ExportMetadataModelAssessmentResponse, AWSError>;
  /**
   * Saves a copy of a database migration assessment report to your Amazon S3 bucket. DMS can save your assessment report as a comma-separated value (CSV) or a PDF file. 
   */
  exportMetadataModelAssessment(callback?: (err: AWSError, data: DMS.Types.ExportMetadataModelAssessmentResponse) => void): Request<DMS.Types.ExportMetadataModelAssessmentResponse, AWSError>;
  /**
   * Uploads the specified certificate.
   */
  importCertificate(params: DMS.Types.ImportCertificateMessage, callback?: (err: AWSError, data: DMS.Types.ImportCertificateResponse) => void): Request<DMS.Types.ImportCertificateResponse, AWSError>;
  /**
   * Uploads the specified certificate.
   */
  importCertificate(callback?: (err: AWSError, data: DMS.Types.ImportCertificateResponse) => void): Request<DMS.Types.ImportCertificateResponse, AWSError>;
  /**
   * Lists all metadata tags attached to an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see  Tag  data type description.
   */
  listTagsForResource(params: DMS.Types.ListTagsForResourceMessage, callback?: (err: AWSError, data: DMS.Types.ListTagsForResourceResponse) => void): Request<DMS.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists all metadata tags attached to an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see  Tag  data type description.
   */
  listTagsForResource(callback?: (err: AWSError, data: DMS.Types.ListTagsForResourceResponse) => void): Request<DMS.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Modifies the specified schema conversion configuration using the provided parameters. 
   */
  modifyConversionConfiguration(params: DMS.Types.ModifyConversionConfigurationMessage, callback?: (err: AWSError, data: DMS.Types.ModifyConversionConfigurationResponse) => void): Request<DMS.Types.ModifyConversionConfigurationResponse, AWSError>;
  /**
   * Modifies the specified schema conversion configuration using the provided parameters. 
   */
  modifyConversionConfiguration(callback?: (err: AWSError, data: DMS.Types.ModifyConversionConfigurationResponse) => void): Request<DMS.Types.ModifyConversionConfigurationResponse, AWSError>;
  /**
   * Modifies the specified data provider using the provided settings.  You must remove the data provider from all migration projects before you can modify it. 
   */
  modifyDataProvider(params: DMS.Types.ModifyDataProviderMessage, callback?: (err: AWSError, data: DMS.Types.ModifyDataProviderResponse) => void): Request<DMS.Types.ModifyDataProviderResponse, AWSError>;
  /**
   * Modifies the specified data provider using the provided settings.  You must remove the data provider from all migration projects before you can modify it. 
   */
  modifyDataProvider(callback?: (err: AWSError, data: DMS.Types.ModifyDataProviderResponse) => void): Request<DMS.Types.ModifyDataProviderResponse, AWSError>;
  /**
   * Modifies the specified endpoint.  For a MySQL source or target endpoint, don't explicitly specify the database using the DatabaseName request parameter on the ModifyEndpoint API call. Specifying DatabaseName when you modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task. 
   */
  modifyEndpoint(params: DMS.Types.ModifyEndpointMessage, callback?: (err: AWSError, data: DMS.Types.ModifyEndpointResponse) => void): Request<DMS.Types.ModifyEndpointResponse, AWSError>;
  /**
   * Modifies the specified endpoint.  For a MySQL source or target endpoint, don't explicitly specify the database using the DatabaseName request parameter on the ModifyEndpoint API call. Specifying DatabaseName when you modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task. 
   */
  modifyEndpoint(callback?: (err: AWSError, data: DMS.Types.ModifyEndpointResponse) => void): Request<DMS.Types.ModifyEndpointResponse, AWSError>;
  /**
   * Modifies an existing DMS event notification subscription. 
   */
  modifyEventSubscription(params: DMS.Types.ModifyEventSubscriptionMessage, callback?: (err: AWSError, data: DMS.Types.ModifyEventSubscriptionResponse) => void): Request<DMS.Types.ModifyEventSubscriptionResponse, AWSError>;
  /**
   * Modifies an existing DMS event notification subscription. 
   */
  modifyEventSubscription(callback?: (err: AWSError, data: DMS.Types.ModifyEventSubscriptionResponse) => void): Request<DMS.Types.ModifyEventSubscriptionResponse, AWSError>;
  /**
   * Modifies the specified instance profile using the provided parameters.  All migration projects associated with the instance profile must be deleted or modified before you can modify the instance profile. 
   */
  modifyInstanceProfile(params: DMS.Types.ModifyInstanceProfileMessage, callback?: (err: AWSError, data: DMS.Types.ModifyInstanceProfileResponse) => void): Request<DMS.Types.ModifyInstanceProfileResponse, AWSError>;
  /**
   * Modifies the specified instance profile using the provided parameters.  All migration projects associated with the instance profile must be deleted or modified before you can modify the instance profile. 
   */
  modifyInstanceProfile(callback?: (err: AWSError, data: DMS.Types.ModifyInstanceProfileResponse) => void): Request<DMS.Types.ModifyInstanceProfileResponse, AWSError>;
  /**
   * Modifies the specified migration project using the provided parameters.  The migration project must be closed before you can modify it. 
   */
  modifyMigrationProject(params: DMS.Types.ModifyMigrationProjectMessage, callback?: (err: AWSError, data: DMS.Types.ModifyMigrationProjectResponse) => void): Request<DMS.Types.ModifyMigrationProjectResponse, AWSError>;
  /**
   * Modifies the specified migration project using the provided parameters.  The migration project must be closed before you can modify it. 
   */
  modifyMigrationProject(callback?: (err: AWSError, data: DMS.Types.ModifyMigrationProjectResponse) => void): Request<DMS.Types.ModifyMigrationProjectResponse, AWSError>;
  /**
   * Modifies an existing DMS Serverless replication configuration that you can use to start a replication. This command includes input validation and logic to check the state of any replication that uses this configuration. You can only modify a replication configuration before any replication that uses it has started. As soon as you have initially started a replication with a given configuiration, you can't modify that configuration, even if you stop it. Other run statuses that allow you to run this command include FAILED and CREATED. A provisioning state that allows you to run this command is FAILED_PROVISION.
   */
  modifyReplicationConfig(params: DMS.Types.ModifyReplicationConfigMessage, callback?: (err: AWSError, data: DMS.Types.ModifyReplicationConfigResponse) => void): Request<DMS.Types.ModifyReplicationConfigResponse, AWSError>;
  /**
   * Modifies an existing DMS Serverless replication configuration that you can use to start a replication. This command includes input validation and logic to check the state of any replication that uses this configuration. You can only modify a replication configuration before any replication that uses it has started. As soon as you have initially started a replication with a given configuiration, you can't modify that configuration, even if you stop it. Other run statuses that allow you to run this command include FAILED and CREATED. A provisioning state that allows you to run this command is FAILED_PROVISION.
   */
  modifyReplicationConfig(callback?: (err: AWSError, data: DMS.Types.ModifyReplicationConfigResponse) => void): Request<DMS.Types.ModifyReplicationConfigResponse, AWSError>;
  /**
   * Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request. Some settings are applied during the maintenance window. 
   */
  modifyReplicationInstance(params: DMS.Types.ModifyReplicationInstanceMessage, callback?: (err: AWSError, data: DMS.Types.ModifyReplicationInstanceResponse) => void): Request<DMS.Types.ModifyReplicationInstanceResponse, AWSError>;
  /**
   * Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request. Some settings are applied during the maintenance window. 
   */
  modifyReplicationInstance(callback?: (err: AWSError, data: DMS.Types.ModifyReplicationInstanceResponse) => void): Request<DMS.Types.ModifyReplicationInstanceResponse, AWSError>;
  /**
   * Modifies the settings for the specified replication subnet group.
   */
  modifyReplicationSubnetGroup(params: DMS.Types.ModifyReplicationSubnetGroupMessage, callback?: (err: AWSError, data: DMS.Types.ModifyReplicationSubnetGroupResponse) => void): Request<DMS.Types.ModifyReplicationSubnetGroupResponse, AWSError>;
  /**
   * Modifies the settings for the specified replication subnet group.
   */
  modifyReplicationSubnetGroup(callback?: (err: AWSError, data: DMS.Types.ModifyReplicationSubnetGroupResponse) => void): Request<DMS.Types.ModifyReplicationSubnetGroupResponse, AWSError>;
  /**
   * Modifies the specified replication task. You can't modify the task endpoints. The task must be stopped before you can modify it.  For more information about DMS tasks, see Working with Migration Tasks in the Database Migration Service User Guide.
   */
  modifyReplicationTask(params: DMS.Types.ModifyReplicationTaskMessage, callback?: (err: AWSError, data: DMS.Types.ModifyReplicationTaskResponse) => void): Request<DMS.Types.ModifyReplicationTaskResponse, AWSError>;
  /**
   * Modifies the specified replication task. You can't modify the task endpoints. The task must be stopped before you can modify it.  For more information about DMS tasks, see Working with Migration Tasks in the Database Migration Service User Guide.
   */
  modifyReplicationTask(callback?: (err: AWSError, data: DMS.Types.ModifyReplicationTaskResponse) => void): Request<DMS.Types.ModifyReplicationTaskResponse, AWSError>;
  /**
   * Moves a replication task from its current replication instance to a different target replication instance using the specified parameters. The target replication instance must be created with the same or later DMS version as the current replication instance.
   */
  moveReplicationTask(params: DMS.Types.MoveReplicationTaskMessage, callback?: (err: AWSError, data: DMS.Types.MoveReplicationTaskResponse) => void): Request<DMS.Types.MoveReplicationTaskResponse, AWSError>;
  /**
   * Moves a replication task from its current replication instance to a different target replication instance using the specified parameters. The target replication instance must be created with the same or later DMS version as the current replication instance.
   */
  moveReplicationTask(callback?: (err: AWSError, data: DMS.Types.MoveReplicationTaskResponse) => void): Request<DMS.Types.MoveReplicationTaskResponse, AWSError>;
  /**
   * Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.
   */
  rebootReplicationInstance(params: DMS.Types.RebootReplicationInstanceMessage, callback?: (err: AWSError, data: DMS.Types.RebootReplicationInstanceResponse) => void): Request<DMS.Types.RebootReplicationInstanceResponse, AWSError>;
  /**
   * Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.
   */
  rebootReplicationInstance(callback?: (err: AWSError, data: DMS.Types.RebootReplicationInstanceResponse) => void): Request<DMS.Types.RebootReplicationInstanceResponse, AWSError>;
  /**
   * Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.
   */
  refreshSchemas(params: DMS.Types.RefreshSchemasMessage, callback?: (err: AWSError, data: DMS.Types.RefreshSchemasResponse) => void): Request<DMS.Types.RefreshSchemasResponse, AWSError>;
  /**
   * Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.
   */
  refreshSchemas(callback?: (err: AWSError, data: DMS.Types.RefreshSchemasResponse) => void): Request<DMS.Types.RefreshSchemasResponse, AWSError>;
  /**
   * Reloads the target database table with the source data for a given DMS Serverless replication configuration. You can only use this operation with a task in the RUNNING state, otherwise the service will throw an InvalidResourceStateFault exception.
   */
  reloadReplicationTables(params: DMS.Types.ReloadReplicationTablesMessage, callback?: (err: AWSError, data: DMS.Types.ReloadReplicationTablesResponse) => void): Request<DMS.Types.ReloadReplicationTablesResponse, AWSError>;
  /**
   * Reloads the target database table with the source data for a given DMS Serverless replication configuration. You can only use this operation with a task in the RUNNING state, otherwise the service will throw an InvalidResourceStateFault exception.
   */
  reloadReplicationTables(callback?: (err: AWSError, data: DMS.Types.ReloadReplicationTablesResponse) => void): Request<DMS.Types.ReloadReplicationTablesResponse, AWSError>;
  /**
   * Reloads the target database table with the source data.  You can only use this operation with a task in the RUNNING state, otherwise the service will throw an InvalidResourceStateFault exception.
   */
  reloadTables(params: DMS.Types.ReloadTablesMessage, callback?: (err: AWSError, data: DMS.Types.ReloadTablesResponse) => void): Request<DMS.Types.ReloadTablesResponse, AWSError>;
  /**
   * Reloads the target database table with the source data.  You can only use this operation with a task in the RUNNING state, otherwise the service will throw an InvalidResourceStateFault exception.
   */
  reloadTables(callback?: (err: AWSError, data: DMS.Types.ReloadTablesResponse) => void): Request<DMS.Types.ReloadTablesResponse, AWSError>;
  /**
   * Removes metadata tags from an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see  Tag  data type description.
   */
  removeTagsFromResource(params: DMS.Types.RemoveTagsFromResourceMessage, callback?: (err: AWSError, data: DMS.Types.RemoveTagsFromResourceResponse) => void): Request<DMS.Types.RemoveTagsFromResourceResponse, AWSError>;
  /**
   * Removes metadata tags from an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see  Tag  data type description.
   */
  removeTagsFromResource(callback?: (err: AWSError, data: DMS.Types.RemoveTagsFromResourceResponse) => void): Request<DMS.Types.RemoveTagsFromResourceResponse, AWSError>;
  /**
   * Runs large-scale assessment (LSA) analysis on every Fleet Advisor collector in your account.
   */
  runFleetAdvisorLsaAnalysis(callback?: (err: AWSError, data: DMS.Types.RunFleetAdvisorLsaAnalysisResponse) => void): Request<DMS.Types.RunFleetAdvisorLsaAnalysisResponse, AWSError>;
  /**
   * Applies the extension pack to your target database. An extension pack is an add-on module that emulates functions present in a source database that are required when converting objects to the target database. 
   */
  startExtensionPackAssociation(params: DMS.Types.StartExtensionPackAssociationMessage, callback?: (err: AWSError, data: DMS.Types.StartExtensionPackAssociationResponse) => void): Request<DMS.Types.StartExtensionPackAssociationResponse, AWSError>;
  /**
   * Applies the extension pack to your target database. An extension pack is an add-on module that emulates functions present in a source database that are required when converting objects to the target database. 
   */
  startExtensionPackAssociation(callback?: (err: AWSError, data: DMS.Types.StartExtensionPackAssociationResponse) => void): Request<DMS.Types.StartExtensionPackAssociationResponse, AWSError>;
  /**
   * Creates a database migration assessment report by assessing the migration complexity for your source database. A database migration assessment report summarizes all of the schema conversion tasks. It also details the action items for database objects that can't be converted to the database engine of your target database instance. 
   */
  startMetadataModelAssessment(params: DMS.Types.StartMetadataModelAssessmentMessage, callback?: (err: AWSError, data: DMS.Types.StartMetadataModelAssessmentResponse) => void): Request<DMS.Types.StartMetadataModelAssessmentResponse, AWSError>;
  /**
   * Creates a database migration assessment report by assessing the migration complexity for your source database. A database migration assessment report summarizes all of the schema conversion tasks. It also details the action items for database objects that can't be converted to the database engine of your target database instance. 
   */
  startMetadataModelAssessment(callback?: (err: AWSError, data: DMS.Types.StartMetadataModelAssessmentResponse) => void): Request<DMS.Types.StartMetadataModelAssessmentResponse, AWSError>;
  /**
   * Converts your source database objects to a format compatible with the target database. 
   */
  startMetadataModelConversion(params: DMS.Types.StartMetadataModelConversionMessage, callback?: (err: AWSError, data: DMS.Types.StartMetadataModelConversionResponse) => void): Request<DMS.Types.StartMetadataModelConversionResponse, AWSError>;
  /**
   * Converts your source database objects to a format compatible with the target database. 
   */
  startMetadataModelConversion(callback?: (err: AWSError, data: DMS.Types.StartMetadataModelConversionResponse) => void): Request<DMS.Types.StartMetadataModelConversionResponse, AWSError>;
  /**
   * Saves your converted code to a file as a SQL script, and stores this file on your Amazon S3 bucket.
   */
  startMetadataModelExportAsScript(params: DMS.Types.StartMetadataModelExportAsScriptMessage, callback?: (err: AWSError, data: DMS.Types.StartMetadataModelExportAsScriptResponse) => void): Request<DMS.Types.StartMetadataModelExportAsScriptResponse, AWSError>;
  /**
   * Saves your converted code to a file as a SQL script, and stores this file on your Amazon S3 bucket.
   */
  startMetadataModelExportAsScript(callback?: (err: AWSError, data: DMS.Types.StartMetadataModelExportAsScriptResponse) => void): Request<DMS.Types.StartMetadataModelExportAsScriptResponse, AWSError>;
  /**
   * Applies converted database objects to your target database. 
   */
  startMetadataModelExportToTarget(params: DMS.Types.StartMetadataModelExportToTargetMessage, callback?: (err: AWSError, data: DMS.Types.StartMetadataModelExportToTargetResponse) => void): Request<DMS.Types.StartMetadataModelExportToTargetResponse, AWSError>;
  /**
   * Applies converted database objects to your target database. 
   */
  startMetadataModelExportToTarget(callback?: (err: AWSError, data: DMS.Types.StartMetadataModelExportToTargetResponse) => void): Request<DMS.Types.StartMetadataModelExportToTargetResponse, AWSError>;
  /**
   * Loads the metadata for all the dependent database objects of the parent object. This operation uses your project's Amazon S3 bucket as a metadata cache to improve performance.
   */
  startMetadataModelImport(params: DMS.Types.StartMetadataModelImportMessage, callback?: (err: AWSError, data: DMS.Types.StartMetadataModelImportResponse) => void): Request<DMS.Types.StartMetadataModelImportResponse, AWSError>;
  /**
   * Loads the metadata for all the dependent database objects of the parent object. This operation uses your project's Amazon S3 bucket as a metadata cache to improve performance.
   */
  startMetadataModelImport(callback?: (err: AWSError, data: DMS.Types.StartMetadataModelImportResponse) => void): Request<DMS.Types.StartMetadataModelImportResponse, AWSError>;
  /**
   * Starts the analysis of your source database to provide recommendations of target engines. You can create recommendations for multiple source databases using BatchStartRecommendations.
   */
  startRecommendations(params: DMS.Types.StartRecommendationsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Starts the analysis of your source database to provide recommendations of target engines. You can create recommendations for multiple source databases using BatchStartRecommendations.
   */
  startRecommendations(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * For a given DMS Serverless replication configuration, DMS connects to the source endpoint and collects the metadata to analyze the replication workload. Using this metadata, DMS then computes and provisions the required capacity and starts replicating to the target endpoint using the server resources that DMS has provisioned for the DMS Serverless replication.
   */
  startReplication(params: DMS.Types.StartReplicationMessage, callback?: (err: AWSError, data: DMS.Types.StartReplicationResponse) => void): Request<DMS.Types.StartReplicationResponse, AWSError>;
  /**
   * For a given DMS Serverless replication configuration, DMS connects to the source endpoint and collects the metadata to analyze the replication workload. Using this metadata, DMS then computes and provisions the required capacity and starts replicating to the target endpoint using the server resources that DMS has provisioned for the DMS Serverless replication.
   */
  startReplication(callback?: (err: AWSError, data: DMS.Types.StartReplicationResponse) => void): Request<DMS.Types.StartReplicationResponse, AWSError>;
  /**
   * Starts the replication task. For more information about DMS tasks, see Working with Migration Tasks  in the Database Migration Service User Guide. 
   */
  startReplicationTask(params: DMS.Types.StartReplicationTaskMessage, callback?: (err: AWSError, data: DMS.Types.StartReplicationTaskResponse) => void): Request<DMS.Types.StartReplicationTaskResponse, AWSError>;
  /**
   * Starts the replication task. For more information about DMS tasks, see Working with Migration Tasks  in the Database Migration Service User Guide. 
   */
  startReplicationTask(callback?: (err: AWSError, data: DMS.Types.StartReplicationTaskResponse) => void): Request<DMS.Types.StartReplicationTaskResponse, AWSError>;
  /**
   *  Starts the replication task assessment for unsupported data types in the source database.  You can only use this operation for a task if the following conditions are true:   The task must be in the stopped state.   The task must have successful connections to the source and target.   If either of these conditions are not met, an InvalidResourceStateFault error will result.  For information about DMS task assessments, see Creating a task assessment report in the Database Migration Service User Guide.
   */
  startReplicationTaskAssessment(params: DMS.Types.StartReplicationTaskAssessmentMessage, callback?: (err: AWSError, data: DMS.Types.StartReplicationTaskAssessmentResponse) => void): Request<DMS.Types.StartReplicationTaskAssessmentResponse, AWSError>;
  /**
   *  Starts the replication task assessment for unsupported data types in the source database.  You can only use this operation for a task if the following conditions are true:   The task must be in the stopped state.   The task must have successful connections to the source and target.   If either of these conditions are not met, an InvalidResourceStateFault error will result.  For information about DMS task assessments, see Creating a task assessment report in the Database Migration Service User Guide.
   */
  startReplicationTaskAssessment(callback?: (err: AWSError, data: DMS.Types.StartReplicationTaskAssessmentResponse) => void): Request<DMS.Types.StartReplicationTaskAssessmentResponse, AWSError>;
  /**
   * Starts a new premigration assessment run for one or more individual assessments of a migration task. The assessments that you can specify depend on the source and target database engine and the migration type defined for the given task. To run this operation, your migration task must already be created. After you run this operation, you can review the status of each individual assessment. You can also run the migration task manually after the assessment run and its individual assessments complete.
   */
  startReplicationTaskAssessmentRun(params: DMS.Types.StartReplicationTaskAssessmentRunMessage, callback?: (err: AWSError, data: DMS.Types.StartReplicationTaskAssessmentRunResponse) => void): Request<DMS.Types.StartReplicationTaskAssessmentRunResponse, AWSError>;
  /**
   * Starts a new premigration assessment run for one or more individual assessments of a migration task. The assessments that you can specify depend on the source and target database engine and the migration type defined for the given task. To run this operation, your migration task must already be created. After you run this operation, you can review the status of each individual assessment. You can also run the migration task manually after the assessment run and its individual assessments complete.
   */
  startReplicationTaskAssessmentRun(callback?: (err: AWSError, data: DMS.Types.StartReplicationTaskAssessmentRunResponse) => void): Request<DMS.Types.StartReplicationTaskAssessmentRunResponse, AWSError>;
  /**
   * For a given DMS Serverless replication configuration, DMS stops any and all ongoing DMS Serverless replications. This command doesn't deprovision the stopped replications.
   */
  stopReplication(params: DMS.Types.StopReplicationMessage, callback?: (err: AWSError, data: DMS.Types.StopReplicationResponse) => void): Request<DMS.Types.StopReplicationResponse, AWSError>;
  /**
   * For a given DMS Serverless replication configuration, DMS stops any and all ongoing DMS Serverless replications. This command doesn't deprovision the stopped replications.
   */
  stopReplication(callback?: (err: AWSError, data: DMS.Types.StopReplicationResponse) => void): Request<DMS.Types.StopReplicationResponse, AWSError>;
  /**
   * Stops the replication task.
   */
  stopReplicationTask(params: DMS.Types.StopReplicationTaskMessage, callback?: (err: AWSError, data: DMS.Types.StopReplicationTaskResponse) => void): Request<DMS.Types.StopReplicationTaskResponse, AWSError>;
  /**
   * Stops the replication task.
   */
  stopReplicationTask(callback?: (err: AWSError, data: DMS.Types.StopReplicationTaskResponse) => void): Request<DMS.Types.StopReplicationTaskResponse, AWSError>;
  /**
   * Tests the connection between the replication instance and the endpoint.
   */
  testConnection(params: DMS.Types.TestConnectionMessage, callback?: (err: AWSError, data: DMS.Types.TestConnectionResponse) => void): Request<DMS.Types.TestConnectionResponse, AWSError>;
  /**
   * Tests the connection between the replication instance and the endpoint.
   */
  testConnection(callback?: (err: AWSError, data: DMS.Types.TestConnectionResponse) => void): Request<DMS.Types.TestConnectionResponse, AWSError>;
  /**
   * Migrates 10 active and enabled Amazon SNS subscriptions at a time and converts them to corresponding Amazon EventBridge rules. By default, this operation migrates subscriptions only when all your replication instance versions are 3.4.5 or higher. If any replication instances are from versions earlier than 3.4.5, the operation raises an error and tells you to upgrade these instances to version 3.4.5 or higher. To enable migration regardless of version, set the Force option to true. However, if you don't upgrade instances earlier than version 3.4.5, some types of events might not be available when you use Amazon EventBridge. To call this operation, make sure that you have certain permissions added to your user account. For more information, see Migrating event subscriptions to Amazon EventBridge in the Amazon Web Services Database Migration Service User Guide.
   */
  updateSubscriptionsToEventBridge(params: DMS.Types.UpdateSubscriptionsToEventBridgeMessage, callback?: (err: AWSError, data: DMS.Types.UpdateSubscriptionsToEventBridgeResponse) => void): Request<DMS.Types.UpdateSubscriptionsToEventBridgeResponse, AWSError>;
  /**
   * Migrates 10 active and enabled Amazon SNS subscriptions at a time and converts them to corresponding Amazon EventBridge rules. By default, this operation migrates subscriptions only when all your replication instance versions are 3.4.5 or higher. If any replication instances are from versions earlier than 3.4.5, the operation raises an error and tells you to upgrade these instances to version 3.4.5 or higher. To enable migration regardless of version, set the Force option to true. However, if you don't upgrade instances earlier than version 3.4.5, some types of events might not be available when you use Amazon EventBridge. To call this operation, make sure that you have certain permissions added to your user account. For more information, see Migrating event subscriptions to Amazon EventBridge in the Amazon Web Services Database Migration Service User Guide.
   */
  updateSubscriptionsToEventBridge(callback?: (err: AWSError, data: DMS.Types.UpdateSubscriptionsToEventBridgeResponse) => void): Request<DMS.Types.UpdateSubscriptionsToEventBridgeResponse, AWSError>;
  /**
   * Waits for the testConnectionSucceeds state by periodically calling the underlying DMS.describeConnectionsoperation every 5 seconds (at most 60 times). Wait until testing connection succeeds.
   */
  waitFor(state: "testConnectionSucceeds", params: DMS.Types.DescribeConnectionsMessage & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: DMS.Types.DescribeConnectionsResponse) => void): Request<DMS.Types.DescribeConnectionsResponse, AWSError>;
  /**
   * Waits for the testConnectionSucceeds state by periodically calling the underlying DMS.describeConnectionsoperation every 5 seconds (at most 60 times). Wait until testing connection succeeds.
   */
  waitFor(state: "testConnectionSucceeds", callback?: (err: AWSError, data: DMS.Types.DescribeConnectionsResponse) => void): Request<DMS.Types.DescribeConnectionsResponse, AWSError>;
  /**
   * Waits for the endpointDeleted state by periodically calling the underlying DMS.describeEndpointsoperation every 5 seconds (at most 60 times). Wait until testing endpoint is deleted.
   */
  waitFor(state: "endpointDeleted", params: DMS.Types.DescribeEndpointsMessage & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: DMS.Types.DescribeEndpointsResponse) => void): Request<DMS.Types.DescribeEndpointsResponse, AWSError>;
  /**
   * Waits for the endpointDeleted state by periodically calling the underlying DMS.describeEndpointsoperation every 5 seconds (at most 60 times). Wait until testing endpoint is deleted.
   */
  waitFor(state: "endpointDeleted", callback?: (err: AWSError, data: DMS.Types.DescribeEndpointsResponse) => void): Request<DMS.Types.DescribeEndpointsResponse, AWSError>;
  /**
   * Waits for the replicationInstanceAvailable state by periodically calling the underlying DMS.describeReplicationInstancesoperation every 60 seconds (at most 60 times). Wait until DMS replication instance is available.
   */
  waitFor(state: "replicationInstanceAvailable", params: DMS.Types.DescribeReplicationInstancesMessage & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationInstancesResponse) => void): Request<DMS.Types.DescribeReplicationInstancesResponse, AWSError>;
  /**
   * Waits for the replicationInstanceAvailable state by periodically calling the underlying DMS.describeReplicationInstancesoperation every 60 seconds (at most 60 times). Wait until DMS replication instance is available.
   */
  waitFor(state: "replicationInstanceAvailable", callback?: (err: AWSError, data: DMS.Types.DescribeReplicationInstancesResponse) => void): Request<DMS.Types.DescribeReplicationInstancesResponse, AWSError>;
  /**
   * Waits for the replicationInstanceDeleted state by periodically calling the underlying DMS.describeReplicationInstancesoperation every 15 seconds (at most 60 times). Wait until DMS replication instance is deleted.
   */
  waitFor(state: "replicationInstanceDeleted", params: DMS.Types.DescribeReplicationInstancesMessage & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationInstancesResponse) => void): Request<DMS.Types.DescribeReplicationInstancesResponse, AWSError>;
  /**
   * Waits for the replicationInstanceDeleted state by periodically calling the underlying DMS.describeReplicationInstancesoperation every 15 seconds (at most 60 times). Wait until DMS replication instance is deleted.
   */
  waitFor(state: "replicationInstanceDeleted", callback?: (err: AWSError, data: DMS.Types.DescribeReplicationInstancesResponse) => void): Request<DMS.Types.DescribeReplicationInstancesResponse, AWSError>;
  /**
   * Waits for the replicationTaskReady state by periodically calling the underlying DMS.describeReplicationTasksoperation every 15 seconds (at most 60 times). Wait until DMS replication task is ready.
   */
  waitFor(state: "replicationTaskReady", params: DMS.Types.DescribeReplicationTasksMessage & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTasksResponse) => void): Request<DMS.Types.DescribeReplicationTasksResponse, AWSError>;
  /**
   * Waits for the replicationTaskReady state by periodically calling the underlying DMS.describeReplicationTasksoperation every 15 seconds (at most 60 times). Wait until DMS replication task is ready.
   */
  waitFor(state: "replicationTaskReady", callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTasksResponse) => void): Request<DMS.Types.DescribeReplicationTasksResponse, AWSError>;
  /**
   * Waits for the replicationTaskStopped state by periodically calling the underlying DMS.describeReplicationTasksoperation every 15 seconds (at most 60 times). Wait until DMS replication task is stopped.
   */
  waitFor(state: "replicationTaskStopped", params: DMS.Types.DescribeReplicationTasksMessage & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTasksResponse) => void): Request<DMS.Types.DescribeReplicationTasksResponse, AWSError>;
  /**
   * Waits for the replicationTaskStopped state by periodically calling the underlying DMS.describeReplicationTasksoperation every 15 seconds (at most 60 times). Wait until DMS replication task is stopped.
   */
  waitFor(state: "replicationTaskStopped", callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTasksResponse) => void): Request<DMS.Types.DescribeReplicationTasksResponse, AWSError>;
  /**
   * Waits for the replicationTaskRunning state by periodically calling the underlying DMS.describeReplicationTasksoperation every 15 seconds (at most 60 times). Wait until DMS replication task is running.
   */
  waitFor(state: "replicationTaskRunning", params: DMS.Types.DescribeReplicationTasksMessage & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTasksResponse) => void): Request<DMS.Types.DescribeReplicationTasksResponse, AWSError>;
  /**
   * Waits for the replicationTaskRunning state by periodically calling the underlying DMS.describeReplicationTasksoperation every 15 seconds (at most 60 times). Wait until DMS replication task is running.
   */
  waitFor(state: "replicationTaskRunning", callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTasksResponse) => void): Request<DMS.Types.DescribeReplicationTasksResponse, AWSError>;
  /**
   * Waits for the replicationTaskDeleted state by periodically calling the underlying DMS.describeReplicationTasksoperation every 15 seconds (at most 60 times). Wait until DMS replication task is deleted.
   */
  waitFor(state: "replicationTaskDeleted", params: DMS.Types.DescribeReplicationTasksMessage & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTasksResponse) => void): Request<DMS.Types.DescribeReplicationTasksResponse, AWSError>;
  /**
   * Waits for the replicationTaskDeleted state by periodically calling the underlying DMS.describeReplicationTasksoperation every 15 seconds (at most 60 times). Wait until DMS replication task is deleted.
   */
  waitFor(state: "replicationTaskDeleted", callback?: (err: AWSError, data: DMS.Types.DescribeReplicationTasksResponse) => void): Request<DMS.Types.DescribeReplicationTasksResponse, AWSError>;
}
declare namespace DMS {
  export interface AccountQuota {
    /**
     * The name of the DMS quota for this Amazon Web Services account.
     */
    AccountQuotaName?: String;
    /**
     * The amount currently used toward the quota maximum.
     */
    Used?: Long;
    /**
     * The maximum allowed value for the quota.
     */
    Max?: Long;
  }
  export type AccountQuotaList = AccountQuota[];
  export interface AddTagsToResourceMessage {
    /**
     * Identifies the DMS resource to which tags should be added. The value for this parameter is an Amazon Resource Name (ARN). For DMS, you can tag a replication instance, an endpoint, or a replication task.
     */
    ResourceArn: String;
    /**
     * One or more tags to be assigned to the resource.
     */
    Tags: TagList;
  }
  export interface AddTagsToResourceResponse {
  }
  export interface ApplyPendingMaintenanceActionMessage {
    /**
     * The Amazon Resource Name (ARN) of the DMS resource that the pending maintenance action applies to.
     */
    ReplicationInstanceArn: String;
    /**
     * The pending maintenance action to apply to this resource. Valid values: os-upgrade, system-update, db-upgrade 
     */
    ApplyAction: String;
    /**
     * A value that specifies the type of opt-in request, or undoes an opt-in request. You can't undo an opt-in request of type immediate. Valid values:    immediate - Apply the maintenance action immediately.    next-maintenance - Apply the maintenance action during the next maintenance window for the resource.    undo-opt-in - Cancel any existing next-maintenance opt-in requests.  
     */
    OptInType: String;
  }
  export interface ApplyPendingMaintenanceActionResponse {
    /**
     * The DMS resource that the pending maintenance action will be applied to.
     */
    ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
  }
  export type ArnList = String[];
  export type AssessmentReportType = "pdf"|"csv"|string;
  export type AssessmentReportTypesList = AssessmentReportType[];
  export type AuthMechanismValue = "default"|"mongodb_cr"|"scram_sha_1"|string;
  export type AuthTypeValue = "no"|"password"|string;
  export interface AvailabilityZone {
    /**
     * The name of the Availability Zone.
     */
    Name?: String;
  }
  export type AvailabilityZonesList = String[];
  export type AvailableUpgradesList = String[];
  export interface BatchStartRecommendationsErrorEntry {
    /**
     * The identifier of the source database.
     */
    DatabaseId?: String;
    /**
     * The information about the error.
     */
    Message?: String;
    /**
     * The code of an error that occurred during the analysis of the source database.
     */
    Code?: String;
  }
  export type BatchStartRecommendationsErrorEntryList = BatchStartRecommendationsErrorEntry[];
  export interface BatchStartRecommendationsRequest {
    /**
     * Provides information about source databases to analyze. After this analysis, Fleet Advisor recommends target engines for each source database.
     */
    Data?: StartRecommendationsRequestEntryList;
  }
  export interface BatchStartRecommendationsResponse {
    /**
     * A list with error details about the analysis of each source database.
     */
    ErrorEntries?: BatchStartRecommendationsErrorEntryList;
  }
  export type Boolean = boolean;
  export type BooleanOptional = boolean;
  export interface CancelReplicationTaskAssessmentRunMessage {
    /**
     * Amazon Resource Name (ARN) of the premigration assessment run to be canceled.
     */
    ReplicationTaskAssessmentRunArn: String;
  }
  export interface CancelReplicationTaskAssessmentRunResponse {
    /**
     * The ReplicationTaskAssessmentRun object for the canceled assessment run.
     */
    ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;
  }
  export type CannedAclForObjectsValue = "none"|"private"|"public-read"|"public-read-write"|"authenticated-read"|"aws-exec-read"|"bucket-owner-read"|"bucket-owner-full-control"|string;
  export interface Certificate {
    /**
     * A customer-assigned name for the certificate. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.
     */
    CertificateIdentifier?: String;
    /**
     * The date that the certificate was created.
     */
    CertificateCreationDate?: TStamp;
    /**
     * The contents of a .pem file, which contains an X.509 certificate.
     */
    CertificatePem?: String;
    /**
     * The location of an imported Oracle Wallet certificate for use with SSL. Example: filebase64("${path.root}/rds-ca-2019-root.sso") 
     */
    CertificateWallet?: CertificateWallet;
    /**
     * The Amazon Resource Name (ARN) for the certificate.
     */
    CertificateArn?: String;
    /**
     * The owner of the certificate.
     */
    CertificateOwner?: String;
    /**
     * The beginning date that the certificate is valid.
     */
    ValidFromDate?: TStamp;
    /**
     * The final date that the certificate is valid.
     */
    ValidToDate?: TStamp;
    /**
     * The signing algorithm for the certificate.
     */
    SigningAlgorithm?: String;
    /**
     * The key length of the cryptographic algorithm being used.
     */
    KeyLength?: IntegerOptional;
  }
  export type CertificateList = Certificate[];
  export type CertificateWallet = Buffer|Uint8Array|Blob|string;
  export type CharLengthSemantics = "default"|"char"|"byte"|string;
  export interface CollectorHealthCheck {
    /**
     * The status of the Fleet Advisor collector.
     */
    CollectorStatus?: CollectorStatus;
    /**
     * Whether the local collector can access its Amazon S3 bucket.
     */
    LocalCollectorS3Access?: BooleanOptional;
    /**
     * Whether the web collector can access its Amazon S3 bucket.
     */
    WebCollectorS3Access?: BooleanOptional;
    /**
     * Whether the role that you provided when creating the Fleet Advisor collector has sufficient permissions to access the Fleet Advisor web collector.
     */
    WebCollectorGrantedRoleBasedAccess?: BooleanOptional;
  }
  export interface CollectorResponse {
    /**
     * The reference ID of the Fleet Advisor collector.
     */
    CollectorReferencedId?: String;
    /**
     * The name of the Fleet Advisor collector .
     */
    CollectorName?: String;
    /**
     * The version of your Fleet Advisor collector, in semantic versioning format, for example 1.0.2 
     */
    CollectorVersion?: String;
    /**
     * Whether the collector version is up to date.
     */
    VersionStatus?: VersionStatus;
    /**
     * A summary description of the Fleet Advisor collector.
     */
    Description?: String;
    /**
     * The Amazon S3 bucket that the Fleet Advisor collector uses to store inventory metadata.
     */
    S3BucketName?: String;
    /**
     * The IAM role that grants permissions to access the specified Amazon S3 bucket.
     */
    ServiceAccessRoleArn?: String;
    CollectorHealthCheck?: CollectorHealthCheck;
    /**
     * The timestamp of the last time the collector received data, in the following format: 2022-01-24T19:04:02.596113Z 
     */
    LastDataReceived?: String;
    /**
     * The timestamp when DMS registered the collector, in the following format: 2022-01-24T19:04:02.596113Z 
     */
    RegisteredDate?: String;
    /**
     * The timestamp when you created the collector, in the following format: 2022-01-24T19:04:02.596113Z 
     */
    CreatedDate?: String;
    /**
     * The timestamp when DMS last modified the collector, in the following format: 2022-01-24T19:04:02.596113Z 
     */
    ModifiedDate?: String;
    InventoryData?: InventoryData;
  }
  export type CollectorResponses = CollectorResponse[];
  export interface CollectorShortInfoResponse {
    /**
     * The reference ID of the Fleet Advisor collector.
     */
    CollectorReferencedId?: String;
    /**
     * The name of the Fleet Advisor collector.
     */
    CollectorName?: String;
  }
  export type CollectorStatus = "UNREGISTERED"|"ACTIVE"|string;
  export type CollectorsList = CollectorShortInfoResponse[];
  export type CompressionTypeValue = "none"|"gzip"|string;
  export interface ComputeConfig {
    /**
     * The Availability Zone where the DMS Serverless replication using this configuration will run. The default value is a random, system-chosen Availability Zone in the configuration's Amazon Web Services Region, for example, "us-west-2". You can't set this parameter if the MultiAZ parameter is set to true.
     */
    AvailabilityZone?: String;
    /**
     * A list of custom DNS name servers supported for the DMS Serverless replication to access your source or target database. This list overrides the default name servers supported by the DMS Serverless replication. You can specify a comma-separated list of internet addresses for up to four DNS name servers. For example: "1.1.1.1,2.2.2.2,3.3.3.3,4.4.4.4" 
     */
    DnsNameServers?: String;
    /**
     * An Key Management Service (KMS) key Amazon Resource Name (ARN) that is used to encrypt the data during DMS Serverless replication. If you don't specify a value for the KmsKeyId parameter, DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.
     */
    KmsKeyId?: String;
    /**
     * Specifies the maximum value of the DMS capacity units (DCUs) for which a given DMS Serverless replication can be provisioned. A single DCU is 2GB of RAM, with 1 DCU as the minimum value allowed. The list of valid DCU values includes 1, 2, 4, 8, 16, 32, 64, 128, 192, 256, and 384. So, the maximum value that you can specify for DMS Serverless is 384. The MaxCapacityUnits parameter is the only DCU parameter you are required to specify.
     */
    MaxCapacityUnits?: IntegerOptional;
    /**
     * Specifies the minimum value of the DMS capacity units (DCUs) for which a given DMS Serverless replication can be provisioned. A single DCU is 2GB of RAM, with 1 DCU as the minimum value allowed. The list of valid DCU values includes 1, 2, 4, 8, 16, 32, 64, 128, 192, 256, and 384. So, the minimum DCU value that you can specify for DMS Serverless is 1. You don't have to specify a value for the MinCapacityUnits parameter. If you don't set this value, DMS scans the current activity of available source tables to identify an optimum setting for this parameter. If there is no current source activity or DMS can't otherwise identify a more appropriate value, it sets this parameter to the minimum DCU value allowed, 1.
     */
    MinCapacityUnits?: IntegerOptional;
    /**
     * Specifies whether the DMS Serverless replication is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the MultiAZ parameter is set to true.
     */
    MultiAZ?: BooleanOptional;
    /**
     * The weekly time range during which system maintenance can occur for the DMS Serverless replication, in Universal Coordinated Time (UTC). The format is ddd:hh24:mi-ddd:hh24:mi. The default is a 30-minute window selected at random from an 8-hour block of time per Amazon Web Services Region. This maintenance occurs on a random day of the week. Valid values for days of the week include Mon, Tue, Wed, Thu, Fri, Sat, and Sun. Constraints include a minimum 30-minute window.
     */
    PreferredMaintenanceWindow?: String;
    /**
     * Specifies a subnet group identifier to associate with the DMS Serverless replication.
     */
    ReplicationSubnetGroupId?: String;
    /**
     * Specifies the virtual private cloud (VPC) security group to use with the DMS Serverless replication. The VPC security group must work with the VPC containing the replication.
     */
    VpcSecurityGroupIds?: StringList;
  }
  export interface Connection {
    /**
     * The ARN of the replication instance.
     */
    ReplicationInstanceArn?: String;
    /**
     * The ARN string that uniquely identifies the endpoint.
     */
    EndpointArn?: String;
    /**
     * The connection status. This parameter can return one of the following values:    "successful"     "testing"     "failed"     "deleting"   
     */
    Status?: String;
    /**
     * The error message when the connection last failed.
     */
    LastFailureMessage?: String;
    /**
     * The identifier of the endpoint. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.
     */
    EndpointIdentifier?: String;
    /**
     * The replication instance identifier. This parameter is stored as a lowercase string.
     */
    ReplicationInstanceIdentifier?: String;
  }
  export type ConnectionList = Connection[];
  export interface CreateDataProviderMessage {
    /**
     * A user-friendly name for the data provider.
     */
    DataProviderName?: String;
    /**
     * A user-friendly description of the data provider.
     */
    Description?: String;
    /**
     * The type of database engine for the data provider. Valid values include "aurora", "aurora_postgresql", "mysql", "oracle", "postgres", and "sqlserver". A value of "aurora" represents Amazon Aurora MySQL-Compatible Edition.
     */
    Engine: String;
    /**
     * The settings in JSON format for a data provider.
     */
    Settings: DataProviderSettings;
    /**
     * One or more tags to be assigned to the data provider.
     */
    Tags?: TagList;
  }
  export interface CreateDataProviderResponse {
    /**
     * The data provider that was created.
     */
    DataProvider?: DataProvider;
  }
  export interface CreateEndpointMessage {
    /**
     * The database endpoint identifier. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.
     */
    EndpointIdentifier: String;
    /**
     * The type of endpoint. Valid values are source and target.
     */
    EndpointType: ReplicationEndpointTypeValue;
    /**
     * The type of engine for the endpoint. Valid values, depending on the EndpointType value, include "mysql", "oracle", "postgres", "mariadb", "aurora", "aurora-postgresql", "opensearch", "redshift", "s3", "db2", "db2-zos", "azuredb", "sybase", "dynamodb", "mongodb", "kinesis", "kafka", "elasticsearch", "docdb", "sqlserver", "neptune", and "babelfish".
     */
    EngineName: String;
    /**
     * The user name to be used to log in to the endpoint database.
     */
    Username?: String;
    /**
     * The password to be used to log in to the endpoint database.
     */
    Password?: SecretString;
    /**
     * The name of the server where the endpoint database resides.
     */
    ServerName?: String;
    /**
     * The port used by the endpoint database.
     */
    Port?: IntegerOptional;
    /**
     * The name of the endpoint database. For a MySQL source or target endpoint, do not specify DatabaseName. To migrate to a specific database, use this setting and targetDbType.
     */
    DatabaseName?: String;
    /**
     * Additional attributes associated with the connection. Each attribute is specified as a name-value pair associated by an equal sign (=). Multiple attributes are separated by a semicolon (;) with no additional white space. For information on the attributes available for connecting your source or target endpoint, see Working with DMS Endpoints in the Database Migration Service User Guide. 
     */
    ExtraConnectionAttributes?: String;
    /**
     * An KMS key identifier that is used to encrypt the connection parameters for the endpoint. If you don't specify a value for the KmsKeyId parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.
     */
    KmsKeyId?: String;
    /**
     * One or more tags to be assigned to the endpoint.
     */
    Tags?: TagList;
    /**
     * The Amazon Resource Name (ARN) for the certificate.
     */
    CertificateArn?: String;
    /**
     * The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is none 
     */
    SslMode?: DmsSslModeValue;
    /**
     *  The Amazon Resource Name (ARN) for the service access role that you want to use to create the endpoint. The role must allow the iam:PassRole action.
     */
    ServiceAccessRoleArn?: String;
    /**
     * The external table definition. 
     */
    ExternalTableDefinition?: String;
    /**
     * Settings in JSON format for the target Amazon DynamoDB endpoint. For information about other available settings, see Using Object Mapping to Migrate Data to DynamoDB in the Database Migration Service User Guide. 
     */
    DynamoDbSettings?: DynamoDbSettings;
    /**
     * Settings in JSON format for the target Amazon S3 endpoint. For more information about the available settings, see Extra Connection Attributes When Using Amazon S3 as a Target for DMS in the Database Migration Service User Guide. 
     */
    S3Settings?: S3Settings;
    /**
     * The settings in JSON format for the DMS transfer type of source endpoint.  Possible settings include the following:    ServiceAccessRoleArn - The Amazon Resource Name (ARN) used by the service access IAM role. The role must allow the iam:PassRole action.    BucketName - The name of the S3 bucket to use.   Shorthand syntax for these settings is as follows: ServiceAccessRoleArn=string,BucketName=string  JSON syntax for these settings is as follows: { "ServiceAccessRoleArn": "string", "BucketName": "string", }  
     */
    DmsTransferSettings?: DmsTransferSettings;
    /**
     * Settings in JSON format for the source MongoDB endpoint. For more information about the available settings, see Endpoint configuration settings when using MongoDB as a source for Database Migration Service in the Database Migration Service User Guide. 
     */
    MongoDbSettings?: MongoDbSettings;
    /**
     * Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. For more information about the available settings, see Using object mapping to migrate data to a Kinesis data stream in the Database Migration Service User Guide. 
     */
    KinesisSettings?: KinesisSettings;
    /**
     * Settings in JSON format for the target Apache Kafka endpoint. For more information about the available settings, see Using object mapping to migrate data to a Kafka topic in the Database Migration Service User Guide. 
     */
    KafkaSettings?: KafkaSettings;
    /**
     * Settings in JSON format for the target OpenSearch endpoint. For more information about the available settings, see Extra Connection Attributes When Using OpenSearch as a Target for DMS in the Database Migration Service User Guide.
     */
    ElasticsearchSettings?: ElasticsearchSettings;
    /**
     * Settings in JSON format for the target Amazon Neptune endpoint. For more information about the available settings, see Specifying graph-mapping rules using Gremlin and R2RML for Amazon Neptune as a target in the Database Migration Service User Guide. 
     */
    NeptuneSettings?: NeptuneSettings;
    RedshiftSettings?: RedshiftSettings;
    /**
     * Settings in JSON format for the source and target PostgreSQL endpoint. For information about other available settings, see Extra connection attributes when using PostgreSQL as a source for DMS and  Extra connection attributes when using PostgreSQL as a target for DMS in the Database Migration Service User Guide. 
     */
    PostgreSQLSettings?: PostgreSQLSettings;
    /**
     * Settings in JSON format for the source and target MySQL endpoint. For information about other available settings, see Extra connection attributes when using MySQL as a source for DMS and Extra connection attributes when using a MySQL-compatible database as a target for DMS in the Database Migration Service User Guide. 
     */
    MySQLSettings?: MySQLSettings;
    /**
     * Settings in JSON format for the source and target Oracle endpoint. For information about other available settings, see Extra connection attributes when using Oracle as a source for DMS and  Extra connection attributes when using Oracle as a target for DMS in the Database Migration Service User Guide. 
     */
    OracleSettings?: OracleSettings;
    /**
     * Settings in JSON format for the source and target SAP ASE endpoint. For information about other available settings, see Extra connection attributes when using SAP ASE as a source for DMS and Extra connection attributes when using SAP ASE as a target for DMS in the Database Migration Service User Guide. 
     */
    SybaseSettings?: SybaseSettings;
    /**
     * Settings in JSON format for the source and target Microsoft SQL Server endpoint. For information about other available settings, see Extra connection attributes when using SQL Server as a source for DMS and  Extra connection attributes when using SQL Server as a target for DMS in the Database Migration Service User Guide. 
     */
    MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings;
    /**
     * Settings in JSON format for the source IBM Db2 LUW endpoint. For information about other available settings, see Extra connection attributes when using Db2 LUW as a source for DMS in the Database Migration Service User Guide. 
     */
    IBMDb2Settings?: IBMDb2Settings;
    /**
     * A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object. The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as Example-App-ARN1. For example, this value might result in the EndpointArn value arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1. If you don't specify a ResourceIdentifier value, DMS generates a default identifier value for the end of EndpointArn.
     */
    ResourceIdentifier?: String;
    DocDbSettings?: DocDbSettings;
    /**
     * Settings in JSON format for the target Redis endpoint.
     */
    RedisSettings?: RedisSettings;
    /**
     * Settings in JSON format for the source GCP MySQL endpoint.
     */
    GcpMySQLSettings?: GcpMySQLSettings;
    /**
     * Settings in JSON format for the target Amazon Timestream endpoint.
     */
    TimestreamSettings?: TimestreamSettings;
  }
  export interface CreateEndpointResponse {
    /**
     * The endpoint that was created.
     */
    Endpoint?: Endpoint;
  }
  export interface CreateEventSubscriptionMessage {
    /**
     * The name of the DMS event notification subscription. This name must be less than 255 characters.
     */
    SubscriptionName: String;
    /**
     *  The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it. 
     */
    SnsTopicArn: String;
    /**
     *  The type of DMS resource that generates the events. For example, if you want to be notified of events generated by a replication instance, you set this parameter to replication-instance. If this value isn't specified, all events are returned.  Valid values: replication-instance | replication-task 
     */
    SourceType?: String;
    /**
     * A list of event categories for a source type that you want to subscribe to. For more information, see Working with Events and Notifications in the Database Migration Service User Guide. 
     */
    EventCategories?: EventCategoriesList;
    /**
     * A list of identifiers for which DMS provides notification events. If you don't specify a value, notifications are provided for all sources. If you specify multiple values, they must be of the same type. For example, if you specify a database instance ID, then all of the other values must be database instance IDs.
     */
    SourceIds?: SourceIdsList;
    /**
     *  A Boolean value; set to true to activate the subscription, or set to false to create the subscription but not activate it. 
     */
    Enabled?: BooleanOptional;
    /**
     * One or more tags to be assigned to the event subscription.
     */
    Tags?: TagList;
  }
  export interface CreateEventSubscriptionResponse {
    /**
     * The event subscription that was created.
     */
    EventSubscription?: EventSubscription;
  }
  export interface CreateFleetAdvisorCollectorRequest {
    /**
     * The name of your Fleet Advisor collector (for example, sample-collector).
     */
    CollectorName: String;
    /**
     * A summary description of your Fleet Advisor collector.
     */
    Description?: String;
    /**
     * The IAM role that grants permissions to access the specified Amazon S3 bucket.
     */
    ServiceAccessRoleArn: String;
    /**
     * The Amazon S3 bucket that the Fleet Advisor collector uses to store inventory metadata.
     */
    S3BucketName: String;
  }
  export interface CreateFleetAdvisorCollectorResponse {
    /**
     * The unique ID of the new Fleet Advisor collector, for example: 22fda70c-40d5-4acf-b233-a495bd8eb7f5 
     */
    CollectorReferencedId?: String;
    /**
     * The name of the new Fleet Advisor collector.
     */
    CollectorName?: String;
    /**
     * A summary description of the Fleet Advisor collector.
     */
    Description?: String;
    /**
     * The IAM role that grants permissions to access the specified Amazon S3 bucket.
     */
    ServiceAccessRoleArn?: String;
    /**
     * The Amazon S3 bucket that the collector uses to store inventory metadata.
     */
    S3BucketName?: String;
  }
  export interface CreateInstanceProfileMessage {
    /**
     * The Availability Zone where the instance profile will be created. The default value is a random, system-chosen Availability Zone in the Amazon Web Services Region where your data provider is created, for examplem us-east-1d.
     */
    AvailabilityZone?: String;
    /**
     * The Amazon Resource Name (ARN) of the KMS key that is used to encrypt the connection parameters for the instance profile. If you don't specify a value for the KmsKeyArn parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.
     */
    KmsKeyArn?: String;
    /**
     * Specifies the accessibility options for the instance profile. A value of true represents an instance profile with a public IP address. A value of false represents an instance profile with a private IP address. The default value is true.
     */
    PubliclyAccessible?: BooleanOptional;
    /**
     * One or more tags to be assigned to the instance profile.
     */
    Tags?: TagList;
    /**
     * Specifies the network type for the instance profile. A value of IPV4 represents an instance profile with IPv4 network type and only supports IPv4 addressing. A value of IPV6 represents an instance profile with IPv6 network type and only supports IPv6 addressing. A value of DUAL represents an instance profile with dual network type that supports IPv4 and IPv6 addressing.
     */
    NetworkType?: String;
    /**
     * A user-friendly name for the instance profile.
     */
    InstanceProfileName?: String;
    /**
     * A user-friendly description of the instance profile.
     */
    Description?: String;
    /**
     * A subnet group to associate with the instance profile.
     */
    SubnetGroupIdentifier?: String;
    /**
     * Specifies the VPC security group names to be used with the instance profile. The VPC security group must work with the VPC containing the instance profile.
     */
    VpcSecurityGroups?: StringList;
  }
  export interface CreateInstanceProfileResponse {
    /**
     * The instance profile that was created.
     */
    InstanceProfile?: InstanceProfile;
  }
  export interface CreateMigrationProjectMessage {
    /**
     * A user-friendly name for the migration project.
     */
    MigrationProjectName?: String;
    /**
     * Information about the source data provider, including the name, ARN, and Secrets Manager parameters.
     */
    SourceDataProviderDescriptors: DataProviderDescriptorDefinitionList;
    /**
     * Information about the target data provider, including the name, ARN, and Amazon Web Services Secrets Manager parameters.
     */
    TargetDataProviderDescriptors: DataProviderDescriptorDefinitionList;
    /**
     * The identifier of the associated instance profile. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.
     */
    InstanceProfileIdentifier: String;
    /**
     * The settings in JSON format for migration rules. Migration rules make it possible for you to change the object names according to the rules that you specify. For example, you can change an object name to lowercase or uppercase, add or remove a prefix or suffix, or rename objects.
     */
    TransformationRules?: String;
    /**
     * A user-friendly description of the migration project.
     */
    Description?: String;
    /**
     * One or more tags to be assigned to the migration project.
     */
    Tags?: TagList;
    /**
     * The schema conversion application attributes, including the Amazon S3 bucket name and Amazon S3 role ARN.
     */
    SchemaConversionApplicationAttributes?: SCApplicationAttributes;
  }
  export interface CreateMigrationProjectResponse {
    /**
     * The migration project that was created.
     */
    MigrationProject?: MigrationProject;
  }
  export interface CreateReplicationConfigMessage {
    /**
     * A unique identifier that you want to use to create a ReplicationConfigArn that is returned as part of the output from this action. You can then pass this output ReplicationConfigArn as the value of the ReplicationConfigArn option for other actions to identify both DMS Serverless replications and replication configurations that you want those actions to operate on. For some actions, you can also use either this unique identifier or a corresponding ARN in action filters to identify the specific replication and replication configuration to operate on.
     */
    ReplicationConfigIdentifier: String;
    /**
     * The Amazon Resource Name (ARN) of the source endpoint for this DMS Serverless replication configuration.
     */
    SourceEndpointArn: String;
    /**
     * The Amazon Resource Name (ARN) of the target endpoint for this DMS serverless replication configuration.
     */
    TargetEndpointArn: String;
    /**
     * Configuration parameters for provisioning an DMS Serverless replication.
     */
    ComputeConfig: ComputeConfig;
    /**
     * The type of DMS Serverless replication to provision using this replication configuration. Possible values:    "full-load"     "cdc"     "full-load-and-cdc"   
     */
    ReplicationType: MigrationTypeValue;
    /**
     * JSON table mappings for DMS Serverless replications that are provisioned using this replication configuration. For more information, see  Specifying table selection and transformations rules using JSON.
     */
    TableMappings: String;
    /**
     * Optional JSON settings for DMS Serverless replications that are provisioned using this replication configuration. For example, see  Change processing tuning settings.
     */
    ReplicationSettings?: String;
    /**
     * Optional JSON settings for specifying supplemental data. For more information, see  Specifying supplemental data for task settings.
     */
    SupplementalSettings?: String;
    /**
     * Optional unique value or name that you set for a given resource that can be used to construct an Amazon Resource Name (ARN) for that resource. For more information, see  Fine-grained access control using resource names and tags.
     */
    ResourceIdentifier?: String;
    /**
     * One or more optional tags associated with resources used by the DMS Serverless replication. For more information, see  Tagging resources in Database Migration Service.
     */
    Tags?: TagList;
  }
  export interface CreateReplicationConfigResponse {
    /**
     * Configuration parameters returned from the DMS Serverless replication after it is created.
     */
    ReplicationConfig?: ReplicationConfig;
  }
  export interface CreateReplicationInstanceMessage {
    /**
     * The replication instance identifier. This parameter is stored as a lowercase string. Constraints:   Must contain 1-63 alphanumeric characters or hyphens.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens.   Example: myrepinstance 
     */
    ReplicationInstanceIdentifier: String;
    /**
     * The amount of storage (in gigabytes) to be initially allocated for the replication instance.
     */
    AllocatedStorage?: IntegerOptional;
    /**
     * The compute and memory capacity of the replication instance as defined for the specified replication instance class. For example to specify the instance class dms.c4.large, set this parameter to "dms.c4.large". For more information on the settings and capacities for the available replication instance classes, see  Choosing the right DMS replication instance; and, Selecting the best size for a replication instance. 
     */
    ReplicationInstanceClass: String;
    /**
     *  Specifies the VPC security group to be used with the replication instance. The VPC security group must work with the VPC containing the replication instance. 
     */
    VpcSecurityGroupIds?: VpcSecurityGroupIdList;
    /**
     * The Availability Zone where the replication instance will be created. The default value is a random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region, for example: us-east-1d.
     */
    AvailabilityZone?: String;
    /**
     * A subnet group to associate with the replication instance.
     */
    ReplicationSubnetGroupIdentifier?: String;
    /**
     * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).  Format: ddd:hh24:mi-ddd:hh24:mi  Default: A 30-minute window selected at random from an 8-hour block of time per Amazon Web Services Region, occurring on a random day of the week. Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun Constraints: Minimum 30-minute window.
     */
    PreferredMaintenanceWindow?: String;
    /**
     *  Specifies whether the replication instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the Multi-AZ parameter is set to true. 
     */
    MultiAZ?: BooleanOptional;
    /**
     * The engine version number of the replication instance. If an engine version number is not specified when a replication instance is created, the default is the latest engine version available.
     */
    EngineVersion?: String;
    /**
     * A value that indicates whether minor engine upgrades are applied automatically to the replication instance during the maintenance window. This parameter defaults to true. Default: true 
     */
    AutoMinorVersionUpgrade?: BooleanOptional;
    /**
     * One or more tags to be assigned to the replication instance.
     */
    Tags?: TagList;
    /**
     * An KMS key identifier that is used to encrypt the data on the replication instance. If you don't specify a value for the KmsKeyId parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.
     */
    KmsKeyId?: String;
    /**
     *  Specifies the accessibility options for the replication instance. A value of true represents an instance with a public IP address. A value of false represents an instance with a private IP address. The default value is true. 
     */
    PubliclyAccessible?: BooleanOptional;
    /**
     * A list of custom DNS name servers supported for the replication instance to access your on-premise source or target database. This list overrides the default name servers supported by the replication instance. You can specify a comma-separated list of internet addresses for up to four on-premise DNS name servers. For example: "1.1.1.1,2.2.2.2,3.3.3.3,4.4.4.4" 
     */
    DnsNameServers?: String;
    /**
     * A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object. The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as Example-App-ARN1. For example, this value might result in the EndpointArn value arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1. If you don't specify a ResourceIdentifier value, DMS generates a default identifier value for the end of EndpointArn.
     */
    ResourceIdentifier?: String;
    /**
     * The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet supported.
     */
    NetworkType?: String;
  }
  export interface CreateReplicationInstanceResponse {
    /**
     * The replication instance that was created.
     */
    ReplicationInstance?: ReplicationInstance;
  }
  export interface CreateReplicationSubnetGroupMessage {
    /**
     * The name for the replication subnet group. This value is stored as a lowercase string. Constraints: Must contain no more than 255 alphanumeric characters, periods, spaces, underscores, or hyphens. Must not be "default". Example: mySubnetgroup 
     */
    ReplicationSubnetGroupIdentifier: String;
    /**
     * The description for the subnet group.
     */
    ReplicationSubnetGroupDescription: String;
    /**
     * One or more subnet IDs to be assigned to the subnet group.
     */
    SubnetIds: SubnetIdentifierList;
    /**
     * One or more tags to be assigned to the subnet group.
     */
    Tags?: TagList;
  }
  export interface CreateReplicationSubnetGroupResponse {
    /**
     * The replication subnet group that was created.
     */
    ReplicationSubnetGroup?: ReplicationSubnetGroup;
  }
  export interface CreateReplicationTaskMessage {
    /**
     * An identifier for the replication task. Constraints:   Must contain 1-255 alphanumeric characters or hyphens.   First character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.  
     */
    ReplicationTaskIdentifier: String;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies the source endpoint.
     */
    SourceEndpointArn: String;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies the target endpoint.
     */
    TargetEndpointArn: String;
    /**
     * The Amazon Resource Name (ARN) of a replication instance.
     */
    ReplicationInstanceArn: String;
    /**
     * The migration type. Valid values: full-load | cdc | full-load-and-cdc 
     */
    MigrationType: MigrationTypeValue;
    /**
     * The table mappings for the task, in JSON format. For more information, see Using Table Mapping to Specify Task Settings in the Database Migration Service User Guide. 
     */
    TableMappings: String;
    /**
     * Overall settings for the task, in JSON format. For more information, see Specifying Task Settings for Database Migration Service Tasks in the Database Migration Service User Guide. 
     */
    ReplicationTaskSettings?: String;
    /**
     * Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error. Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”
     */
    CdcStartTime?: TStamp;
    /**
     * Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.  The value can be in date, checkpoint, or LSN/SCN format. Date Example: --cdc-start-position “2018-03-08T12:12:12” Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93" LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”  When you use this task setting with a source PostgreSQL database, a logical replication slot should already be created and associated with the source endpoint. You can verify this by setting the slotName extra connection attribute to the name of this logical replication slot. For more information, see Extra Connection Attributes When Using PostgreSQL as a Source for DMS. 
     */
    CdcStartPosition?: String;
    /**
     * Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time. Server time example: --cdc-stop-position “server_time:2018-02-09T12:12:12” Commit time example: --cdc-stop-position “commit_time:2018-02-09T12:12:12“
     */
    CdcStopPosition?: String;
    /**
     * One or more tags to be assigned to the replication task.
     */
    Tags?: TagList;
    /**
     * Supplemental information that the task requires to migrate the data for certain source and target endpoints. For more information, see Specifying Supplemental Data for Task Settings in the Database Migration Service User Guide. 
     */
    TaskData?: String;
    /**
     * A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object. The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as Example-App-ARN1. For example, this value might result in the EndpointArn value arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1. If you don't specify a ResourceIdentifier value, DMS generates a default identifier value for the end of EndpointArn.
     */
    ResourceIdentifier?: String;
  }
  export interface CreateReplicationTaskResponse {
    /**
     * The replication task that was created.
     */
    ReplicationTask?: ReplicationTask;
  }
  export type DataFormatValue = "csv"|"parquet"|string;
  export interface DataProvider {
    /**
     * The name of the data provider.
     */
    DataProviderName?: String;
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the data provider.
     */
    DataProviderArn?: String;
    /**
     * The time the data provider was created.
     */
    DataProviderCreationTime?: Iso8601DateTime;
    /**
     * A description of the data provider. Descriptions can have up to 31 characters. A description can contain only ASCII letters, digits, and hyphens ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter.
     */
    Description?: String;
    /**
     * The type of database engine for the data provider. Valid values include "aurora", "aurora_postgresql", "mysql", "oracle", "postgres", and "sqlserver". A value of "aurora" represents Amazon Aurora MySQL-Compatible Edition.
     */
    Engine?: String;
    /**
     * The settings in JSON format for a data provider.
     */
    Settings?: DataProviderSettings;
  }
  export interface DataProviderDescriptor {
    /**
     * The identifier of the Amazon Web Services Secrets Manager Secret used to store access credentials for the data provider.
     */
    SecretsManagerSecretId?: String;
    /**
     * The ARN of the role used to access Amazon Web Services Secrets Manager.
     */
    SecretsManagerAccessRoleArn?: String;
    /**
     * The user-friendly name of the data provider.
     */
    DataProviderName?: String;
    /**
     * The Amazon Resource Name (ARN) of the data provider.
     */
    DataProviderArn?: String;
  }
  export interface DataProviderDescriptorDefinition {
    /**
     * The name or Amazon Resource Name (ARN) of the data provider.
     */
    DataProviderIdentifier: String;
    /**
     * The identifier of the Amazon Web Services Secrets Manager Secret used to store access credentials for the data provider.
     */
    SecretsManagerSecretId?: String;
    /**
     * The ARN of the role used to access Amazon Web Services Secrets Manager.
     */
    SecretsManagerAccessRoleArn?: String;
  }
  export type DataProviderDescriptorDefinitionList = DataProviderDescriptorDefinition[];
  export type DataProviderDescriptorList = DataProviderDescriptor[];
  export type DataProviderList = DataProvider[];
  export interface DataProviderSettings {
    RedshiftSettings?: RedshiftDataProviderSettings;
    PostgreSqlSettings?: PostgreSqlDataProviderSettings;
    MySqlSettings?: MySqlDataProviderSettings;
    OracleSettings?: OracleDataProviderSettings;
    MicrosoftSqlServerSettings?: MicrosoftSqlServerDataProviderSettings;
    DocDbSettings?: DocDbDataProviderSettings;
    /**
     * Provides information that defines a MariaDB data provider.
     */
    MariaDbSettings?: MariaDbDataProviderSettings;
    /**
     * Provides information that defines a MongoDB data provider.
     */
    MongoDbSettings?: MongoDbDataProviderSettings;
  }
  export interface DatabaseInstanceSoftwareDetailsResponse {
    /**
     * The database engine of a database in a Fleet Advisor collector inventory, for example Microsoft SQL Server.
     */
    Engine?: String;
    /**
     * The database engine version of a database in a Fleet Advisor collector inventory, for example 2019.
     */
    EngineVersion?: String;
    /**
     * The database engine edition of a database in a Fleet Advisor collector inventory, for example Express.
     */
    EngineEdition?: String;
    /**
     * The service pack level of the database.
     */
    ServicePack?: String;
    /**
     * The support level of the database, for example Mainstream support.
     */
    SupportLevel?: String;
    /**
     * The operating system architecture of the database.
     */
    OsArchitecture?: IntegerOptional;
    /**
     * Information about the database engine software, for example Mainstream support ends on November 14th, 2024.
     */
    Tooltip?: String;
  }
  export type DatabaseList = DatabaseResponse[];
  export type DatabaseMode = "default"|"babelfish"|string;
  export interface DatabaseResponse {
    /**
     * The ID of a database in a Fleet Advisor collector inventory.
     */
    DatabaseId?: String;
    /**
     * The name of a database in a Fleet Advisor collector inventory. 
     */
    DatabaseName?: String;
    /**
     * The IP address of a database in a Fleet Advisor collector inventory. 
     */
    IpAddress?: String;
    /**
     * The number of schemas in a Fleet Advisor collector inventory database. 
     */
    NumberOfSchemas?: LongOptional;
    /**
     * The server name of a database in a Fleet Advisor collector inventory. 
     */
    Server?: ServerShortInfoResponse;
    /**
     * The software details of a database in a Fleet Advisor collector inventory, such as database engine and version.
     */
    SoftwareDetails?: DatabaseInstanceSoftwareDetailsResponse;
    /**
     * A list of collectors associated with the database.
     */
    Collectors?: CollectorsList;
  }
  export interface DatabaseShortInfoResponse {
    /**
     * The ID of a database in a Fleet Advisor collector inventory.
     */
    DatabaseId?: String;
    /**
     * The name of a database in a Fleet Advisor collector inventory.
     */
    DatabaseName?: String;
    /**
     * The IP address of a database in a Fleet Advisor collector inventory.
     */
    DatabaseIpAddress?: String;
    /**
     * The database engine of a database in a Fleet Advisor collector inventory, for example PostgreSQL.
     */
    DatabaseEngine?: String;
  }
  export type DatePartitionDelimiterValue = "SLASH"|"UNDERSCORE"|"DASH"|"NONE"|string;
  export type DatePartitionSequenceValue = "YYYYMMDD"|"YYYYMMDDHH"|"YYYYMM"|"MMYYYYDD"|"DDMMYYYY"|string;
  export interface DefaultErrorDetails {
    /**
     * The error message.
     */
    Message?: String;
  }
  export interface DeleteCertificateMessage {
    /**
     * The Amazon Resource Name (ARN) of the certificate.
     */
    CertificateArn: String;
  }
  export interface DeleteCertificateResponse {
    /**
     * The Secure Sockets Layer (SSL) certificate.
     */
    Certificate?: Certificate;
  }
  export interface DeleteCollectorRequest {
    /**
     * The reference ID of the Fleet Advisor collector to delete.
     */
    CollectorReferencedId: String;
  }
  export interface DeleteConnectionMessage {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn: String;
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn: String;
  }
  export interface DeleteConnectionResponse {
    /**
     * The connection that is being deleted.
     */
    Connection?: Connection;
  }
  export interface DeleteDataProviderMessage {
    /**
     * The identifier of the data provider to delete.
     */
    DataProviderIdentifier: String;
  }
  export interface DeleteDataProviderResponse {
    /**
     * The data provider that was deleted.
     */
    DataProvider?: DataProvider;
  }
  export interface DeleteEndpointMessage {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn: String;
  }
  export interface DeleteEndpointResponse {
    /**
     * The endpoint that was deleted.
     */
    Endpoint?: Endpoint;
  }
  export interface DeleteEventSubscriptionMessage {
    /**
     * The name of the DMS event notification subscription to be deleted.
     */
    SubscriptionName: String;
  }
  export interface DeleteEventSubscriptionResponse {
    /**
     * The event subscription that was deleted.
     */
    EventSubscription?: EventSubscription;
  }
  export interface DeleteFleetAdvisorDatabasesRequest {
    /**
     * The IDs of the Fleet Advisor collector databases to delete.
     */
    DatabaseIds: StringList;
  }
  export interface DeleteFleetAdvisorDatabasesResponse {
    /**
     * The IDs of the databases that the operation deleted.
     */
    DatabaseIds?: StringList;
  }
  export interface DeleteInstanceProfileMessage {
    /**
     * The identifier of the instance profile to delete.
     */
    InstanceProfileIdentifier: String;
  }
  export interface DeleteInstanceProfileResponse {
    /**
     * The instance profile that was deleted.
     */
    InstanceProfile?: InstanceProfile;
  }
  export interface DeleteMigrationProjectMessage {
    /**
     * The name or Amazon Resource Name (ARN) of the migration project to delete.
     */
    MigrationProjectIdentifier: String;
  }
  export interface DeleteMigrationProjectResponse {
    /**
     * The migration project that was deleted.
     */
    MigrationProject?: MigrationProject;
  }
  export interface DeleteReplicationConfigMessage {
    /**
     * The replication config to delete.
     */
    ReplicationConfigArn: String;
  }
  export interface DeleteReplicationConfigResponse {
    /**
     * Configuration parameters returned for the DMS Serverless replication after it is deleted.
     */
    ReplicationConfig?: ReplicationConfig;
  }
  export interface DeleteReplicationInstanceMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication instance to be deleted.
     */
    ReplicationInstanceArn: String;
  }
  export interface DeleteReplicationInstanceResponse {
    /**
     * The replication instance that was deleted.
     */
    ReplicationInstance?: ReplicationInstance;
  }
  export interface DeleteReplicationSubnetGroupMessage {
    /**
     * The subnet group name of the replication instance.
     */
    ReplicationSubnetGroupIdentifier: String;
  }
  export interface DeleteReplicationSubnetGroupResponse {
  }
  export interface DeleteReplicationTaskAssessmentRunMessage {
    /**
     * Amazon Resource Name (ARN) of the premigration assessment run to be deleted.
     */
    ReplicationTaskAssessmentRunArn: String;
  }
  export interface DeleteReplicationTaskAssessmentRunResponse {
    /**
     * The ReplicationTaskAssessmentRun object for the deleted assessment run.
     */
    ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;
  }
  export interface DeleteReplicationTaskMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication task to be deleted.
     */
    ReplicationTaskArn: String;
  }
  export interface DeleteReplicationTaskResponse {
    /**
     * The deleted replication task.
     */
    ReplicationTask?: ReplicationTask;
  }
  export interface DescribeAccountAttributesMessage {
  }
  export interface DescribeAccountAttributesResponse {
    /**
     * Account quota information.
     */
    AccountQuotas?: AccountQuotaList;
    /**
     * A unique DMS identifier for an account in a particular Amazon Web Services Region. The value of this identifier has the following format: c99999999999. DMS uses this identifier to name artifacts. For example, DMS uses this identifier to name the default Amazon S3 bucket for storing task assessment reports in a given Amazon Web Services Region. The format of this S3 bucket name is the following: dms-AccountNumber-UniqueAccountIdentifier. Here is an example name for this default S3 bucket: dms-111122223333-c44445555666.  DMS supports the UniqueAccountIdentifier parameter in versions 3.1.4 and later. 
     */
    UniqueAccountIdentifier?: String;
  }
  export interface DescribeApplicableIndividualAssessmentsMessage {
    /**
     * Amazon Resource Name (ARN) of a migration task on which you want to base the default list of individual assessments.
     */
    ReplicationTaskArn?: String;
    /**
     * ARN of a replication instance on which you want to base the default list of individual assessments.
     */
    ReplicationInstanceArn?: String;
    /**
     * Name of a database engine that the specified replication instance supports as a source.
     */
    SourceEngineName?: String;
    /**
     * Name of a database engine that the specified replication instance supports as a target.
     */
    TargetEngineName?: String;
    /**
     * Name of the migration type that each provided individual assessment must support.
     */
    MigrationType?: MigrationTypeValue;
    /**
     * Maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
     */
    MaxRecords?: IntegerOptional;
    /**
     * Optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeApplicableIndividualAssessmentsResponse {
    /**
     * List of names for the individual assessments supported by the premigration assessment run that you start based on the specified request parameters. For more information on the available individual assessments, including compatibility with different migration task configurations, see Working with premigration assessment runs in the Database Migration Service User Guide. 
     */
    IndividualAssessmentNames?: IndividualAssessmentNameList;
    /**
     * Pagination token returned for you to pass to a subsequent request. If you pass this token as the Marker value in a subsequent request, the response includes only records beyond the marker, up to the value specified in the request by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeCertificatesMessage {
    /**
     * Filters applied to the certificates described in the form of key-value pairs. Valid values are certificate-arn and certificate-id.
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 10
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeCertificatesResponse {
    /**
     * The pagination token.
     */
    Marker?: String;
    /**
     * The Secure Sockets Layer (SSL) certificates associated with the replication instance.
     */
    Certificates?: CertificateList;
  }
  export interface DescribeConnectionsMessage {
    /**
     * The filters applied to the connection. Valid filter names: endpoint-arn | replication-instance-arn
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeConnectionsResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * A description of the connections.
     */
    Connections?: ConnectionList;
  }
  export interface DescribeConversionConfigurationMessage {
    /**
     * The name or Amazon Resource Name (ARN) for the schema conversion project to describe.
     */
    MigrationProjectIdentifier: String;
  }
  export interface DescribeConversionConfigurationResponse {
    /**
     * The name or Amazon Resource Name (ARN) for the schema conversion project.
     */
    MigrationProjectIdentifier?: String;
    /**
     * The configuration parameters for the schema conversion project.
     */
    ConversionConfiguration?: String;
  }
  export interface DescribeDataProvidersMessage {
    /**
     * Filters applied to the data providers described in the form of key-value pairs.
     */
    Filters?: FilterList;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, DMS includes a pagination token in the response so that you can retrieve the remaining results.
     */
    MaxRecords?: IntegerOptional;
    /**
     * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
     */
    Marker?: String;
  }
  export interface DescribeDataProvidersResponse {
    /**
     * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
     */
    Marker?: String;
    /**
     * A description of data providers.
     */
    DataProviders?: DataProviderList;
  }
  export interface DescribeEndpointSettingsMessage {
    /**
     * The database engine used for your source or target endpoint.
     */
    EngineName: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeEndpointSettingsResponse {
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
    /**
     * Descriptions of the endpoint settings available for your source or target database engine.
     */
    EndpointSettings?: EndpointSettingsList;
  }
  export interface DescribeEndpointTypesMessage {
    /**
     * Filters applied to the endpoint types. Valid filter names: engine-name | endpoint-type
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeEndpointTypesResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * The types of endpoints that are supported.
     */
    SupportedEndpointTypes?: SupportedEndpointTypeList;
  }
  export interface DescribeEndpointsMessage {
    /**
     * Filters applied to the endpoints. Valid filter names: endpoint-arn | endpoint-type | endpoint-id | engine-name
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeEndpointsResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * Endpoint description.
     */
    Endpoints?: EndpointList;
  }
  export interface DescribeEngineVersionsMessage {
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. 
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeEngineVersionsResponse {
    /**
     * Returned EngineVersion objects that describe the replication instance engine versions used in the project.
     */
    EngineVersions?: EngineVersionList;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeEventCategoriesMessage {
    /**
     *  The type of DMS resource that generates events.  Valid values: replication-instance | replication-task
     */
    SourceType?: String;
    /**
     * Filters applied to the event categories.
     */
    Filters?: FilterList;
  }
  export interface DescribeEventCategoriesResponse {
    /**
     * A list of event categories.
     */
    EventCategoryGroupList?: EventCategoryGroupList;
  }
  export interface DescribeEventSubscriptionsMessage {
    /**
     * The name of the DMS event subscription to be described.
     */
    SubscriptionName?: String;
    /**
     * Filters applied to event subscriptions. Valid filter names: event-subscription-arn | event-subscription-id 
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeEventSubscriptionsResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * A list of event subscriptions.
     */
    EventSubscriptionsList?: EventSubscriptionsList;
  }
  export interface DescribeEventsMessage {
    /**
     *  The identifier of an event source.
     */
    SourceIdentifier?: String;
    /**
     * The type of DMS resource that generates events. Valid values: replication-instance | replication-task
     */
    SourceType?: SourceType;
    /**
     * The start time for the events to be listed.
     */
    StartTime?: TStamp;
    /**
     * The end time for the events to be listed.
     */
    EndTime?: TStamp;
    /**
     * The duration of the events to be listed.
     */
    Duration?: IntegerOptional;
    /**
     * A list of event categories for the source type that you've chosen.
     */
    EventCategories?: EventCategoriesList;
    /**
     * Filters applied to events. The only valid filter is replication-instance-id.
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeEventsResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * The events described.
     */
    Events?: EventList;
  }
  export interface DescribeExtensionPackAssociationsMessage {
    /**
     * The name or Amazon Resource Name (ARN) for the migration project.
     */
    MigrationProjectIdentifier: String;
    /**
     * Filters applied to the extension pack associations described in the form of key-value pairs.
     */
    Filters?: FilterList;
    /**
     * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
     */
    Marker?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, DMS includes a pagination token in the response so that you can retrieve the remaining results.
     */
    MaxRecords?: IntegerOptional;
  }
  export interface DescribeExtensionPackAssociationsResponse {
    /**
     * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
     */
    Marker?: String;
    /**
     * A paginated list of extension pack associations for the specified migration project.
     */
    Requests?: SchemaConversionRequestList;
  }
  export interface DescribeFleetAdvisorCollectorsRequest {
    /**
     *  If you specify any of the following filters, the output includes information for only those collectors that meet the filter criteria:    collector-referenced-id – The ID of the collector agent, for example d4610ac5-e323-4ad9-bc50-eaf7249dfe9d.    collector-name – The name of the collector agent.   An example is: describe-fleet-advisor-collectors --filter Name="collector-referenced-id",Values="d4610ac5-e323-4ad9-bc50-eaf7249dfe9d" 
     */
    Filters?: FilterList;
    /**
     * Sets the maximum number of records returned in the response.
     */
    MaxRecords?: IntegerOptional;
    /**
     * If NextToken is returned by a previous response, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. 
     */
    NextToken?: String;
  }
  export interface DescribeFleetAdvisorCollectorsResponse {
    /**
     * Provides descriptions of the Fleet Advisor collectors, including the collectors' name and ID, and the latest inventory data. 
     */
    Collectors?: CollectorResponses;
    /**
     * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. 
     */
    NextToken?: String;
  }
  export interface DescribeFleetAdvisorDatabasesRequest {
    /**
     *  If you specify any of the following filters, the output includes information for only those databases that meet the filter criteria:     database-id – The ID of the database.    database-name – The name of the database.    database-engine – The name of the database engine.    server-ip-address – The IP address of the database server.    database-ip-address – The IP address of the database.    collector-name – The name of the associated Fleet Advisor collector.   An example is: describe-fleet-advisor-databases --filter Name="database-id",Values="45" 
     */
    Filters?: FilterList;
    /**
     * Sets the maximum number of records returned in the response.
     */
    MaxRecords?: IntegerOptional;
    /**
     * If NextToken is returned by a previous response, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. 
     */
    NextToken?: String;
  }
  export interface DescribeFleetAdvisorDatabasesResponse {
    /**
     * Provides descriptions of the Fleet Advisor collector databases, including the database's collector, ID, and name.
     */
    Databases?: DatabaseList;
    /**
     * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. 
     */
    NextToken?: String;
  }
  export interface DescribeFleetAdvisorLsaAnalysisRequest {
    /**
     * Sets the maximum number of records returned in the response.
     */
    MaxRecords?: IntegerOptional;
    /**
     * If NextToken is returned by a previous response, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. 
     */
    NextToken?: String;
  }
  export interface DescribeFleetAdvisorLsaAnalysisResponse {
    /**
     * A list of FleetAdvisorLsaAnalysisResponse objects.
     */
    Analysis?: FleetAdvisorLsaAnalysisResponseList;
    /**
     * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. 
     */
    NextToken?: String;
  }
  export interface DescribeFleetAdvisorSchemaObjectSummaryRequest {
    /**
     *  If you specify any of the following filters, the output includes information for only those schema objects that meet the filter criteria:    schema-id – The ID of the schema, for example d4610ac5-e323-4ad9-bc50-eaf7249dfe9d.   Example: describe-fleet-advisor-schema-object-summary --filter Name="schema-id",Values="50" 
     */
    Filters?: FilterList;
    /**
     * Sets the maximum number of records returned in the response.
     */
    MaxRecords?: IntegerOptional;
    /**
     * If NextToken is returned by a previous response, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. 
     */
    NextToken?: String;
  }
  export interface DescribeFleetAdvisorSchemaObjectSummaryResponse {
    /**
     * A collection of FleetAdvisorSchemaObjectResponse objects.
     */
    FleetAdvisorSchemaObjects?: FleetAdvisorSchemaObjectList;
    /**
     * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. 
     */
    NextToken?: String;
  }
  export interface DescribeFleetAdvisorSchemasRequest {
    /**
     *  If you specify any of the following filters, the output includes information for only those schemas that meet the filter criteria:    complexity – The schema's complexity, for example Simple.    database-id – The ID of the schema's database.    database-ip-address – The IP address of the schema's database.    database-name – The name of the schema's database.    database-engine – The name of the schema database's engine.    original-schema-name – The name of the schema's database's main schema.    schema-id – The ID of the schema, for example 15.    schema-name – The name of the schema.    server-ip-address – The IP address of the schema database's server.   An example is: describe-fleet-advisor-schemas --filter Name="schema-id",Values="50" 
     */
    Filters?: FilterList;
    /**
     * Sets the maximum number of records returned in the response.
     */
    MaxRecords?: IntegerOptional;
    /**
     * If NextToken is returned by a previous response, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. 
     */
    NextToken?: String;
  }
  export interface DescribeFleetAdvisorSchemasResponse {
    /**
     * A collection of SchemaResponse objects.
     */
    FleetAdvisorSchemas?: FleetAdvisorSchemaList;
    /**
     * If NextToken is returned, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. 
     */
    NextToken?: String;
  }
  export interface DescribeInstanceProfilesMessage {
    /**
     * Filters applied to the instance profiles described in the form of key-value pairs.
     */
    Filters?: FilterList;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, DMS includes a pagination token in the response so that you can retrieve the remaining results.
     */
    MaxRecords?: IntegerOptional;
    /**
     * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
     */
    Marker?: String;
  }
  export interface DescribeInstanceProfilesResponse {
    /**
     * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
     */
    Marker?: String;
    /**
     * A description of instance profiles.
     */
    InstanceProfiles?: InstanceProfileList;
  }
  export interface DescribeMetadataModelAssessmentsMessage {
    /**
     * The name or Amazon Resource Name (ARN) of the migration project.
     */
    MigrationProjectIdentifier: String;
    /**
     * Filters applied to the metadata model assessments described in the form of key-value pairs.
     */
    Filters?: FilterList;
    /**
     * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
     */
    Marker?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, DMS includes a pagination token in the response so that you can retrieve the remaining results.
     */
    MaxRecords?: IntegerOptional;
  }
  export interface DescribeMetadataModelAssessmentsResponse {
    /**
     * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
     */
    Marker?: String;
    /**
     * A paginated list of metadata model assessments for the specified migration project.
     */
    Requests?: SchemaConversionRequestList;
  }
  export interface DescribeMetadataModelConversionsMessage {
    /**
     * The migration project name or Amazon Resource Name (ARN).
     */
    MigrationProjectIdentifier: String;
    /**
     * Filters applied to the metadata model conversions described in the form of key-value pairs.
     */
    Filters?: FilterList;
    /**
     * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
     */
    Marker?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, DMS includes a pagination token in the response so that you can retrieve the remaining results.
     */
    MaxRecords?: IntegerOptional;
  }
  export interface DescribeMetadataModelConversionsResponse {
    /**
     * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
     */
    Marker?: String;
    /**
     * A paginated list of metadata model conversions.
     */
    Requests?: SchemaConversionRequestList;
  }
  export interface DescribeMetadataModelExportsAsScriptMessage {
    /**
     * The migration project name or Amazon Resource Name (ARN).
     */
    MigrationProjectIdentifier: String;
    /**
     * Filters applied to the metadata model exports described in the form of key-value pairs.
     */
    Filters?: FilterList;
    /**
     * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
     */
    Marker?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, DMS includes a pagination token in the response so that you can retrieve the remaining results.
     */
    MaxRecords?: IntegerOptional;
  }
  export interface DescribeMetadataModelExportsAsScriptResponse {
    /**
     * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
     */
    Marker?: String;
    /**
     * A paginated list of metadata model exports.
     */
    Requests?: SchemaConversionRequestList;
  }
  export interface DescribeMetadataModelExportsToTargetMessage {
    /**
     * The migration project name or Amazon Resource Name (ARN).
     */
    MigrationProjectIdentifier: String;
    /**
     * Filters applied to the metadata model exports described in the form of key-value pairs.
     */
    Filters?: FilterList;
    /**
     * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
     */
    Marker?: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, DMS includes a pagination token in the response so that you can retrieve the remaining results.
     */
    MaxRecords?: IntegerOptional;
  }
  export interface DescribeMetadataModelExportsToTargetResponse {
    /**
     * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
     */
    Marker?: String;
    /**
     * A paginated list of metadata model exports.
     */
    Requests?: SchemaConversionRequestList;
  }
  export interface DescribeMetadataModelImportsMessage {
    /**
     * The migration project name or Amazon Resource Name (ARN).
     */
    MigrationProjectIdentifier: String;
    /**
     * Filters applied to the metadata model imports described in the form of key-value pairs.
     */
    Filters?: FilterList;
    /**
     * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
     */
    Marker?: String;
    /**
     * A paginated list of metadata model imports.
     */
    MaxRecords?: IntegerOptional;
  }
  export interface DescribeMetadataModelImportsResponse {
    /**
     * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
     */
    Marker?: String;
    /**
     * A paginated list of metadata model imports.
     */
    Requests?: SchemaConversionRequestList;
  }
  export interface DescribeMigrationProjectsMessage {
    /**
     * Filters applied to the migration projects described in the form of key-value pairs.
     */
    Filters?: FilterList;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, DMS includes a pagination token in the response so that you can retrieve the remaining results.
     */
    MaxRecords?: IntegerOptional;
    /**
     * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
     */
    Marker?: String;
  }
  export interface DescribeMigrationProjectsResponse {
    /**
     * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
     */
    Marker?: String;
    /**
     * A description of migration projects.
     */
    MigrationProjects?: MigrationProjectList;
  }
  export interface DescribeOrderableReplicationInstancesMessage {
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeOrderableReplicationInstancesResponse {
    /**
     * The order-able replication instances available.
     */
    OrderableReplicationInstances?: OrderableReplicationInstanceList;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribePendingMaintenanceActionsMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn?: String;
    /**
     * 
     */
    Filters?: FilterList;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
  }
  export interface DescribePendingMaintenanceActionsResponse {
    /**
     * The pending maintenance action.
     */
    PendingMaintenanceActions?: PendingMaintenanceActions;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeRecommendationLimitationsRequest {
    /**
     * Filters applied to the limitations described in the form of key-value pairs.
     */
    Filters?: FilterList;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, Fleet Advisor includes a pagination token in the response so that you can retrieve the remaining results.
     */
    MaxRecords?: IntegerOptional;
    /**
     * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If NextToken is returned by a previous response, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
     */
    NextToken?: String;
  }
  export interface DescribeRecommendationLimitationsResponse {
    /**
     * The unique pagination token returned for you to pass to a subsequent request. Fleet Advisor returns this token when the number of records in the response is greater than the MaxRecords value. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
     */
    NextToken?: String;
    /**
     * The list of limitations for recommendations of target Amazon Web Services engines.
     */
    Limitations?: LimitationList;
  }
  export interface DescribeRecommendationsRequest {
    /**
     * Filters applied to the target engine recommendations described in the form of key-value pairs.
     */
    Filters?: FilterList;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, Fleet Advisor includes a pagination token in the response so that you can retrieve the remaining results.
     */
    MaxRecords?: IntegerOptional;
    /**
     * Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If NextToken is returned by a previous response, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
     */
    NextToken?: String;
  }
  export interface DescribeRecommendationsResponse {
    /**
     * The unique pagination token returned for you to pass to a subsequent request. Fleet Advisor returns this token when the number of records in the response is greater than the MaxRecords value. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.
     */
    NextToken?: String;
    /**
     * The list of recommendations of target engines that Fleet Advisor created for the source database.
     */
    Recommendations?: RecommendationList;
  }
  export interface DescribeRefreshSchemasStatusMessage {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn: String;
  }
  export interface DescribeRefreshSchemasStatusResponse {
    /**
     * The status of the schema.
     */
    RefreshSchemasStatus?: RefreshSchemasStatus;
  }
  export interface DescribeReplicationConfigsMessage {
    /**
     * Filters applied to the replication configs.
     */
    Filters?: FilterList;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. 
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeReplicationConfigsResponse {
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * Returned configuration parameters that describe each provisioned DMS Serverless replication.
     */
    ReplicationConfigs?: ReplicationConfigList;
  }
  export interface DescribeReplicationInstanceTaskLogsMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn: String;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeReplicationInstanceTaskLogsResponse {
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn?: String;
    /**
     * An array of replication task log metadata. Each member of the array contains the replication task name, ARN, and task log size (in bytes). 
     */
    ReplicationInstanceTaskLogs?: ReplicationInstanceTaskLogsList;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeReplicationInstancesMessage {
    /**
     * Filters applied to replication instances. Valid filter names: replication-instance-arn | replication-instance-id | replication-instance-class | engine-version
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeReplicationInstancesResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * The replication instances described.
     */
    ReplicationInstances?: ReplicationInstanceList;
  }
  export interface DescribeReplicationSubnetGroupsMessage {
    /**
     * Filters applied to replication subnet groups. Valid filter names: replication-subnet-group-id
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeReplicationSubnetGroupsResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * A description of the replication subnet groups.
     */
    ReplicationSubnetGroups?: ReplicationSubnetGroups;
  }
  export interface DescribeReplicationTableStatisticsMessage {
    /**
     * The replication config to describe.
     */
    ReplicationConfigArn: String;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. 
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * Filters applied to the replication table statistics.
     */
    Filters?: FilterList;
  }
  export interface DescribeReplicationTableStatisticsResponse {
    /**
     * The Amazon Resource Name of the replication config.
     */
    ReplicationConfigArn?: String;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * Returns table statistics on the replication, including table name, rows inserted, rows updated, and rows deleted.
     */
    ReplicationTableStatistics?: ReplicationTableStatisticsList;
  }
  export interface DescribeReplicationTaskAssessmentResultsMessage {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the task. When this input parameter is specified, the API returns only one result and ignore the values of the MaxRecords and Marker parameters. 
     */
    ReplicationTaskArn?: String;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeReplicationTaskAssessmentResultsResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * - The Amazon S3 bucket where the task assessment report is located. 
     */
    BucketName?: String;
    /**
     *  The task assessment report. 
     */
    ReplicationTaskAssessmentResults?: ReplicationTaskAssessmentResultList;
  }
  export interface DescribeReplicationTaskAssessmentRunsMessage {
    /**
     * Filters applied to the premigration assessment runs described in the form of key-value pairs. Valid filter names: replication-task-assessment-run-arn, replication-task-arn, replication-instance-arn, status 
     */
    Filters?: FilterList;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeReplicationTaskAssessmentRunsResponse {
    /**
     * A pagination token returned for you to pass to a subsequent request. If you pass this token as the Marker value in a subsequent request, the response includes only records beyond the marker, up to the value specified in the request by MaxRecords.
     */
    Marker?: String;
    /**
     * One or more premigration assessment runs as specified by Filters.
     */
    ReplicationTaskAssessmentRuns?: ReplicationTaskAssessmentRunList;
  }
  export interface DescribeReplicationTaskIndividualAssessmentsMessage {
    /**
     * Filters applied to the individual assessments described in the form of key-value pairs. Valid filter names: replication-task-assessment-run-arn, replication-task-arn, status 
     */
    Filters?: FilterList;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.
     */
    Marker?: String;
  }
  export interface DescribeReplicationTaskIndividualAssessmentsResponse {
    /**
     * A pagination token returned for you to pass to a subsequent request. If you pass this token as the Marker value in a subsequent request, the response includes only records beyond the marker, up to the value specified in the request by MaxRecords.
     */
    Marker?: String;
    /**
     * One or more individual assessments as specified by Filters.
     */
    ReplicationTaskIndividualAssessments?: ReplicationTaskIndividualAssessmentList;
  }
  export interface DescribeReplicationTasksMessage {
    /**
     * Filters applied to replication tasks. Valid filter names: replication-task-arn | replication-task-id | migration-type | endpoint-arn | replication-instance-arn
     */
    Filters?: FilterList;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default).
     */
    WithoutSettings?: BooleanOptional;
  }
  export interface DescribeReplicationTasksResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * A description of the replication tasks.
     */
    ReplicationTasks?: ReplicationTaskList;
  }
  export interface DescribeReplicationsMessage {
    /**
     * Filters applied to the replications.
     */
    Filters?: FilterList;
    /**
     * The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. 
     */
    MaxRecords?: IntegerOptional;
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeReplicationsResponse {
    /**
     * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * The replication descriptions.
     */
    Replications?: ReplicationList;
  }
  export interface DescribeSchemasMessage {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn: String;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export interface DescribeSchemasResponse {
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * The described schema.
     */
    Schemas?: SchemaList;
  }
  export interface DescribeTableStatisticsMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication task.
     */
    ReplicationTaskArn: String;
    /**
     *  The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 500.
     */
    MaxRecords?: IntegerOptional;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
    /**
     * Filters applied to table statistics. Valid filter names: schema-name | table-name | table-state A combination of filters creates an AND condition where each record matches all specified filters.
     */
    Filters?: FilterList;
  }
  export interface DescribeTableStatisticsResponse {
    /**
     * The Amazon Resource Name (ARN) of the replication task.
     */
    ReplicationTaskArn?: String;
    /**
     * The table statistics.
     */
    TableStatistics?: TableStatisticsList;
    /**
     *  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. 
     */
    Marker?: String;
  }
  export type DmsSslModeValue = "none"|"require"|"verify-ca"|"verify-full"|string;
  export interface DmsTransferSettings {
    /**
     * The Amazon Resource Name (ARN) used by the service access IAM role. The role must allow the iam:PassRole action.
     */
    ServiceAccessRoleArn?: String;
    /**
     *  The name of the S3 bucket to use. 
     */
    BucketName?: String;
  }
  export interface DocDbDataProviderSettings {
    /**
     * The name of the source DocumentDB server.
     */
    ServerName?: String;
    /**
     * The port value for the DocumentDB data provider.
     */
    Port?: IntegerOptional;
    /**
     * The database name on the DocumentDB data provider.
     */
    DatabaseName?: String;
    /**
     * The SSL mode used to connect to the DocumentDB data provider. The default value is none.
     */
    SslMode?: DmsSslModeValue;
    /**
     * The Amazon Resource Name (ARN) of the certificate used for SSL connection.
     */
    CertificateArn?: String;
  }
  export interface DocDbSettings {
    /**
     * The user name you use to access the DocumentDB source endpoint. 
     */
    Username?: String;
    /**
     *  The password for the user account you use to access the DocumentDB source endpoint. 
     */
    Password?: SecretString;
    /**
     *  The name of the server on the DocumentDB source endpoint. 
     */
    ServerName?: String;
    /**
     *  The port value for the DocumentDB source endpoint. 
     */
    Port?: IntegerOptional;
    /**
     *  The database name on the DocumentDB source endpoint. 
     */
    DatabaseName?: String;
    /**
     *  Specifies either document or table mode.  Default value is "none". Specify "none" to use document mode. Specify "one" to use table mode.
     */
    NestingLevel?: NestingLevelValue;
    /**
     *  Specifies the document ID. Use this setting when NestingLevel is set to "none".  Default value is "false". 
     */
    ExtractDocId?: BooleanOptional;
    /**
     *  Indicates the number of documents to preview to determine the document organization. Use this setting when NestingLevel is set to "one".  Must be a positive value greater than 0. Default value is 1000.
     */
    DocsToInvestigate?: IntegerOptional;
    /**
     * The KMS key identifier that is used to encrypt the content on the replication instance. If you don't specify a value for the KmsKeyId parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.
     */
    KmsKeyId?: String;
    /**
     * The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the Amazon Web Services Secrets Manager secret that allows access to the DocumentDB endpoint.  You can specify one of two sets of values for these permissions. You can specify the values for this setting and SecretsManagerSecretId. Or you can specify clear-text values for UserName, Password, ServerName, and Port. You can't specify both. For more information on creating this SecretsManagerSecret and the SecretsManagerAccessRoleArn and SecretsManagerSecretId required to access it, see Using secrets to access Database Migration Service resources in the Database Migration Service User Guide. 
     */
    SecretsManagerAccessRoleArn?: String;
    /**
     * The full ARN, partial ARN, or friendly name of the SecretsManagerSecret that contains the DocumentDB endpoint connection details.
     */
    SecretsManagerSecretId?: String;
    /**
     * If true, DMS retrieves the entire document from the DocumentDB source during migration. This may cause a migration failure if the server response exceeds bandwidth limits. To fetch only updates and deletes during migration, set this parameter to false.
     */
    UseUpdateLookUp?: BooleanOptional;
    /**
     * If true, DMS replicates data to shard collections. DMS only uses this setting if the target endpoint is a DocumentDB elastic cluster. When this setting is true, note the following:   You must set TargetTablePrepMode to nothing.   DMS automatically sets useUpdateLookup to false.  
     */
    ReplicateShardCollections?: BooleanOptional;
  }
  export type DoubleOptional = number;
  export interface DynamoDbSettings {
    /**
     *  The Amazon Resource Name (ARN) used by the service to access the IAM role. The role must allow the iam:PassRole action.
     */
    ServiceAccessRoleArn: String;
  }
  export interface ElasticsearchSettings {
    /**
     * The Amazon Resource Name (ARN) used by the service to access the IAM role. The role must allow the iam:PassRole action.
     */
    ServiceAccessRoleArn: String;
    /**
     * The endpoint for the OpenSearch cluster. DMS uses HTTPS if a transport protocol (http/https) is not specified.
     */
    EndpointUri: String;
    /**
     * The maximum percentage of records that can fail to be written before a full load operation stops. To avoid early failure, this counter is only effective after 1000 records are transferred. OpenSearch also has the concept of error monitoring during the last 10 minutes of an Observation Window. If transfer of all records fail in the last 10 minutes, the full load operation stops. 
     */
    FullLoadErrorPercentage?: IntegerOptional;
    /**
     * The maximum number of seconds for which DMS retries failed API requests to the OpenSearch cluster.
     */
    ErrorRetryDuration?: IntegerOptional;
    /**
     * Set this option to true for DMS to migrate documentation using the documentation type _doc. OpenSearch and an Elasticsearch cluster only support the _doc documentation type in versions 7. x and later. The default value is false.
     */
    UseNewMappingType?: BooleanOptional;
  }
  export type EncodingTypeValue = "plain"|"plain-dictionary"|"rle-dictionary"|string;
  export type EncryptionModeValue = "sse-s3"|"sse-kms"|string;
  export interface Endpoint {
    /**
     * The database endpoint identifier. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.
     */
    EndpointIdentifier?: String;
    /**
     * The type of endpoint. Valid values are source and target.
     */
    EndpointType?: ReplicationEndpointTypeValue;
    /**
     * The database engine name. Valid values, depending on the EndpointType, include "mysql", "oracle", "postgres", "mariadb", "aurora", "aurora-postgresql", "redshift", "s3", "db2", "db2-zos", "azuredb", "sybase", "dynamodb", "mongodb", "kinesis", "kafka", "elasticsearch", "documentdb", "sqlserver", "neptune", and "babelfish".
     */
    EngineName?: String;
    /**
     * The expanded name for the engine name. For example, if the EngineName parameter is "aurora", this value would be "Amazon Aurora MySQL".
     */
    EngineDisplayName?: String;
    /**
     * The user name used to connect to the endpoint.
     */
    Username?: String;
    /**
     * The name of the server at the endpoint.
     */
    ServerName?: String;
    /**
     * The port value used to access the endpoint.
     */
    Port?: IntegerOptional;
    /**
     * The name of the database at the endpoint.
     */
    DatabaseName?: String;
    /**
     * Additional connection attributes used to connect to the endpoint.
     */
    ExtraConnectionAttributes?: String;
    /**
     * The status of the endpoint.
     */
    Status?: String;
    /**
     * An KMS key identifier that is used to encrypt the connection parameters for the endpoint. If you don't specify a value for the KmsKeyId parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.
     */
    KmsKeyId?: String;
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn?: String;
    /**
     * The Amazon Resource Name (ARN) used for SSL connection to the endpoint.
     */
    CertificateArn?: String;
    /**
     * The SSL mode used to connect to the endpoint. The default value is none.
     */
    SslMode?: DmsSslModeValue;
    /**
     * The Amazon Resource Name (ARN) used by the service to access the IAM role. The role must allow the iam:PassRole action.
     */
    ServiceAccessRoleArn?: String;
    /**
     * The external table definition.
     */
    ExternalTableDefinition?: String;
    /**
     *  Value returned by a call to CreateEndpoint that can be used for cross-account validation. Use it on a subsequent call to CreateEndpoint to create the endpoint with a cross-account. 
     */
    ExternalId?: String;
    /**
     * The settings for the DynamoDB target endpoint. For more information, see the DynamoDBSettings structure.
     */
    DynamoDbSettings?: DynamoDbSettings;
    /**
     * The settings for the S3 target endpoint. For more information, see the S3Settings structure.
     */
    S3Settings?: S3Settings;
    /**
     * The settings for the DMS Transfer type source. For more information, see the DmsTransferSettings structure. 
     */
    DmsTransferSettings?: DmsTransferSettings;
    /**
     * The settings for the MongoDB source endpoint. For more information, see the MongoDbSettings structure.
     */
    MongoDbSettings?: MongoDbSettings;
    /**
     * The settings for the Amazon Kinesis target endpoint. For more information, see the KinesisSettings structure.
     */
    KinesisSettings?: KinesisSettings;
    /**
     * The settings for the Apache Kafka target endpoint. For more information, see the KafkaSettings structure.
     */
    KafkaSettings?: KafkaSettings;
    /**
     * The settings for the OpenSearch source endpoint. For more information, see the ElasticsearchSettings structure.
     */
    ElasticsearchSettings?: ElasticsearchSettings;
    /**
     * The settings for the Amazon Neptune target endpoint. For more information, see the NeptuneSettings structure.
     */
    NeptuneSettings?: NeptuneSettings;
    /**
     * Settings for the Amazon Redshift endpoint.
     */
    RedshiftSettings?: RedshiftSettings;
    /**
     * The settings for the PostgreSQL source and target endpoint. For more information, see the PostgreSQLSettings structure.
     */
    PostgreSQLSettings?: PostgreSQLSettings;
    /**
     * The settings for the MySQL source and target endpoint. For more information, see the MySQLSettings structure.
     */
    MySQLSettings?: MySQLSettings;
    /**
     * The settings for the Oracle source and target endpoint. For more information, see the OracleSettings structure.
     */
    OracleSettings?: OracleSettings;
    /**
     * The settings for the SAP ASE source and target endpoint. For more information, see the SybaseSettings structure.
     */
    SybaseSettings?: SybaseSettings;
    /**
     * The settings for the Microsoft SQL Server source and target endpoint. For more information, see the MicrosoftSQLServerSettings structure.
     */
    MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings;
    /**
     * The settings for the IBM Db2 LUW source endpoint. For more information, see the IBMDb2Settings structure. 
     */
    IBMDb2Settings?: IBMDb2Settings;
    DocDbSettings?: DocDbSettings;
    /**
     * The settings for the Redis target endpoint. For more information, see the RedisSettings structure.
     */
    RedisSettings?: RedisSettings;
    /**
     * Settings in JSON format for the source GCP MySQL endpoint.
     */
    GcpMySQLSettings?: GcpMySQLSettings;
    /**
     * The settings for the Amazon Timestream target endpoint. For more information, see the TimestreamSettings structure.
     */
    TimestreamSettings?: TimestreamSettings;
  }
  export type EndpointList = Endpoint[];
  export interface EndpointSetting {
    /**
     * The name that you want to give the endpoint settings.
     */
    Name?: String;
    /**
     * The type of endpoint. Valid values are source and target.
     */
    Type?: EndpointSettingTypeValue;
    /**
     * Enumerated values to use for this endpoint.
     */
    EnumValues?: EndpointSettingEnumValues;
    /**
     * A value that marks this endpoint setting as sensitive.
     */
    Sensitive?: BooleanOptional;
    /**
     * The unit of measure for this endpoint setting.
     */
    Units?: String;
    /**
     * The relevance or validity of an endpoint setting for an engine name and its endpoint type.
     */
    Applicability?: String;
    /**
     * The minimum value of an endpoint setting that is of type int.
     */
    IntValueMin?: IntegerOptional;
    /**
     * The maximum value of an endpoint setting that is of type int.
     */
    IntValueMax?: IntegerOptional;
    /**
     * The default value of the endpoint setting if no value is specified using CreateEndpoint or ModifyEndpoint.
     */
    DefaultValue?: String;
  }
  export type EndpointSettingEnumValues = String[];
  export type EndpointSettingTypeValue = "string"|"boolean"|"integer"|"enum"|string;
  export type EndpointSettingsList = EndpointSetting[];
  export interface EngineVersion {
    /**
     * The version number of the replication instance.
     */
    Version?: String;
    /**
     * The lifecycle status of the replication instance version. Valid values are DEPRECATED, DEFAULT_VERSION, and ACTIVE.
     */
    Lifecycle?: String;
    /**
     * The release status of the replication instance version.
     */
    ReleaseStatus?: ReleaseStatusValues;
    /**
     * The date when the replication instance version became publicly available.
     */
    LaunchDate?: TStamp;
    /**
     * The date when the replication instance will be automatically upgraded. This setting only applies if the auto-minor-version setting is enabled.
     */
    AutoUpgradeDate?: TStamp;
    /**
     * The date when the replication instance version will be deprecated and can no longer be requested.
     */
    DeprecationDate?: TStamp;
    /**
     * The date when the replication instance will have a version upgrade forced.
     */
    ForceUpgradeDate?: TStamp;
    /**
     * The list of valid replication instance versions that you can upgrade to.
     */
    AvailableUpgrades?: AvailableUpgradesList;
  }
  export type EngineVersionList = EngineVersion[];
  export interface ErrorDetails {
    /**
     * Error information about a project.
     */
    defaultErrorDetails?: DefaultErrorDetails;
  }
  export interface Event {
    /**
     *  The identifier of an event source.
     */
    SourceIdentifier?: String;
    /**
     *  The type of DMS resource that generates events.  Valid values: replication-instance | endpoint | replication-task
     */
    SourceType?: SourceType;
    /**
     * The event message.
     */
    Message?: String;
    /**
     * The event categories available for the specified source type.
     */
    EventCategories?: EventCategoriesList;
    /**
     * The date of the event.
     */
    Date?: TStamp;
  }
  export type EventCategoriesList = String[];
  export interface EventCategoryGroup {
    /**
     *  The type of DMS resource that generates events.  Valid values: replication-instance | replication-server | security-group | replication-task
     */
    SourceType?: String;
    /**
     *  A list of event categories from a source type that you've chosen.
     */
    EventCategories?: EventCategoriesList;
  }
  export type EventCategoryGroupList = EventCategoryGroup[];
  export type EventList = Event[];
  export interface EventSubscription {
    /**
     * The Amazon Web Services customer account associated with the DMS event notification subscription.
     */
    CustomerAwsId?: String;
    /**
     * The DMS event notification subscription Id.
     */
    CustSubscriptionId?: String;
    /**
     * The topic ARN of the DMS event notification subscription.
     */
    SnsTopicArn?: String;
    /**
     * The status of the DMS event notification subscription. Constraints: Can be one of the following: creating | modifying | deleting | active | no-permission | topic-not-exist The status "no-permission" indicates that DMS no longer has permission to post to the SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the subscription was created.
     */
    Status?: String;
    /**
     * The time the DMS event notification subscription was created.
     */
    SubscriptionCreationTime?: String;
    /**
     *  The type of DMS resource that generates events.  Valid values: replication-instance | replication-server | security-group | replication-task
     */
    SourceType?: String;
    /**
     * A list of source Ids for the event subscription.
     */
    SourceIdsList?: SourceIdsList;
    /**
     * A lists of event categories.
     */
    EventCategoriesList?: EventCategoriesList;
    /**
     * Boolean value that indicates if the event subscription is enabled.
     */
    Enabled?: Boolean;
  }
  export type EventSubscriptionsList = EventSubscription[];
  export type ExcludeTestList = String[];
  export interface ExportMetadataModelAssessmentMessage {
    /**
     * The migration project name or Amazon Resource Name (ARN).
     */
    MigrationProjectIdentifier: String;
    /**
     * A value that specifies the database objects to assess.
     */
    SelectionRules: String;
    /**
     * The name of the assessment file to create in your Amazon S3 bucket.
     */
    FileName?: String;
    /**
     * The file format of the assessment file.
     */
    AssessmentReportTypes?: AssessmentReportTypesList;
  }
  export interface ExportMetadataModelAssessmentResponse {
    /**
     * The Amazon S3 details for an assessment exported in PDF format.
     */
    PdfReport?: ExportMetadataModelAssessmentResultEntry;
    /**
     * The Amazon S3 details for an assessment exported in CSV format.
     */
    CsvReport?: ExportMetadataModelAssessmentResultEntry;
  }
  export interface ExportMetadataModelAssessmentResultEntry {
    /**
     * The object key for the object containing the exported metadata model assessment.
     */
    S3ObjectKey?: String;
    /**
     * The URL for the object containing the exported metadata model assessment.
     */
    ObjectURL?: String;
  }
  export interface ExportSqlDetails {
    /**
     * The Amazon S3 object key for the object containing the exported metadata model assessment.
     */
    S3ObjectKey?: String;
    /**
     * The URL for the object containing the exported metadata model assessment.
     */
    ObjectURL?: String;
  }
  export interface Filter {
    /**
     * The name of the filter as specified for a Describe* or similar operation.
     */
    Name: String;
    /**
     * The filter value, which can specify one or more values used to narrow the returned results.
     */
    Values: FilterValueList;
  }
  export type FilterList = Filter[];
  export type FilterValueList = String[];
  export interface FleetAdvisorLsaAnalysisResponse {
    /**
     * The ID of an LSA analysis run by a Fleet Advisor collector.
     */
    LsaAnalysisId?: String;
    /**
     * The status of an LSA analysis run by a Fleet Advisor collector.
     */
    Status?: String;
  }
  export type FleetAdvisorLsaAnalysisResponseList = FleetAdvisorLsaAnalysisResponse[];
  export type FleetAdvisorSchemaList = SchemaResponse[];
  export type FleetAdvisorSchemaObjectList = FleetAdvisorSchemaObjectResponse[];
  export interface FleetAdvisorSchemaObjectResponse {
    /**
     * The ID of a schema object in a Fleet Advisor collector inventory.
     */
    SchemaId?: String;
    /**
     * The type of the schema object, as reported by the database engine. Examples include the following:    function     trigger     SYSTEM_TABLE     QUEUE   
     */
    ObjectType?: String;
    /**
     * The number of objects in a schema object in a Fleet Advisor collector inventory.
     */
    NumberOfObjects?: LongOptional;
    /**
     * The number of lines of code in a schema object in a Fleet Advisor collector inventory.
     */
    CodeLineCount?: LongOptional;
    /**
     * The size level of the code in a schema object in a Fleet Advisor collector inventory.
     */
    CodeSize?: LongOptional;
  }
  export interface GcpMySQLSettings {
    /**
     * Specifies a script to run immediately after DMS connects to the endpoint. The migration task continues running regardless if the SQL statement succeeds or fails. For this parameter, provide the code of the script itself, not the name of a file containing the script. 
     */
    AfterConnectScript?: String;
    /**
     * Cleans and recreates table metadata information on the replication instance when a mismatch occurs. For example, in a situation where running an alter DDL on the table could result in different information about the table cached in the replication instance. 
     */
    CleanSourceMetadataOnMismatch?: BooleanOptional;
    /**
     * Database name for the endpoint. For a MySQL source or target endpoint, don't explicitly specify the database using the DatabaseName request parameter on either the CreateEndpoint or ModifyEndpoint API call. Specifying DatabaseName when you create or modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task. 
     */
    DatabaseName?: String;
    /**
     * Specifies how often to check the binary log for new changes/events when the database is idle. The default is five seconds. Example: eventsPollInterval=5;  In the example, DMS checks for changes in the binary logs every five seconds. 
     */
    EventsPollInterval?: IntegerOptional;
    /**
     * Specifies where to migrate source tables on the target, either to a single database or multiple databases. Example: targetDbType=MULTIPLE_DATABASES 
     */
    TargetDbType?: TargetDbType;
    /**
     * Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database. Example: maxFileSize=512 
     */
    MaxFileSize?: IntegerOptional;
    /**
     * Improves performance when loading data into the MySQL-compatible target database. Specifies how many threads to use to load the data into the MySQL-compatible target database. Setting a large number of threads can have an adverse effect on database performance, because a separate connection is required for each thread. The default is one. Example: parallelLoadThreads=1 
     */
    ParallelLoadThreads?: IntegerOptional;
    /**
     * Endpoint connection password.
     */
    Password?: SecretString;
    /**
     * Endpoint TCP port.
     */
    Port?: IntegerOptional;
    /**
     * The MySQL host name.
     */
    ServerName?: String;
    /**
     * Specifies the time zone for the source MySQL database. Example: serverTimezone=US/Pacific;  Note: Do not enclose time zones in single quotes.
     */
    ServerTimezone?: String;
    /**
     * Endpoint connection user name.
     */
    Username?: String;
    /**
     * The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the Amazon Web Services Secrets Manager secret that allows access to the MySQL endpoint.  You can specify one of two sets of values for these permissions. You can specify the values for this setting and SecretsManagerSecretId. Or you can specify clear-text values for UserName, Password, ServerName, and Port. You can't specify both. For more information on creating this SecretsManagerSecret and the SecretsManagerAccessRoleArn and SecretsManagerSecretId required to access it, see Using secrets to access Database Migration Service resources in the Database Migration Service User Guide.  
     */
    SecretsManagerAccessRoleArn?: String;
    /**
     * The full ARN, partial ARN, or friendly name of the SecretsManagerSecret that contains the MySQL endpoint connection details. 
     */
    SecretsManagerSecretId?: String;
  }
  export interface IBMDb2Settings {
    /**
     * Database name for the endpoint.
     */
    DatabaseName?: String;
    /**
     * Endpoint connection password.
     */
    Password?: SecretString;
    /**
     * Endpoint TCP port. The default value is 50000.
     */
    Port?: IntegerOptional;
    /**
     * Fully qualified domain name of the endpoint.
     */
    ServerName?: String;
    /**
     * Enables ongoing replication (CDC) as a BOOLEAN value. The default is true.
     */
    SetDataCaptureChanges?: BooleanOptional;
    /**
     * For ongoing replication (CDC), use CurrentLSN to specify a log sequence number (LSN) where you want the replication to start.
     */
    CurrentLsn?: String;
    /**
     * Maximum number of bytes per read, as a NUMBER value. The default is 64 KB.
     */
    MaxKBytesPerRead?: IntegerOptional;
    /**
     * Endpoint connection user name.
     */
    Username?: String;
    /**
     * The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the Amazon Web Services Secrets Manager secret that allows access to the Db2 LUW endpoint.   You can specify one of two sets of values for these permissions. You can specify the values for this setting and SecretsManagerSecretId. Or you can specify clear-text values for UserName, Password, ServerName, and Port. You can't specify both. For more information on creating this SecretsManagerSecret and the SecretsManagerAccessRoleArn and SecretsManagerSecretId required to access it, see Using secrets to access Database Migration Service resources in the Database Migration Service User Guide. 
     */
    SecretsManagerAccessRoleArn?: String;
    /**
     * The full ARN, partial ARN, or friendly name of the SecretsManagerSecret that contains the Db2 LUW endpoint connection details.
     */
    SecretsManagerSecretId?: String;
  }
  export interface ImportCertificateMessage {
    /**
     * A customer-assigned name for the certificate. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.
     */
    CertificateIdentifier: String;
    /**
     * The contents of a .pem file, which contains an X.509 certificate.
     */
    CertificatePem?: SecretString;
    /**
     * The location of an imported Oracle Wallet certificate for use with SSL. Provide the name of a .sso file using the fileb:// prefix. You can't provide the certificate inline. Example: filebase64("${path.root}/rds-ca-2019-root.sso") 
     */
    CertificateWallet?: CertificateWallet;
    /**
     * The tags associated with the certificate.
     */
    Tags?: TagList;
  }
  export interface ImportCertificateResponse {
    /**
     * The certificate to be uploaded.
     */
    Certificate?: Certificate;
  }
  export type IncludeTestList = String[];
  export type IndividualAssessmentNameList = String[];
  export interface InstanceProfile {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the instance profile.
     */
    InstanceProfileArn?: String;
    /**
     * The Availability Zone where the instance profile runs.
     */
    AvailabilityZone?: String;
    /**
     * The Amazon Resource Name (ARN) of the KMS key that is used to encrypt the connection parameters for the instance profile. If you don't specify a value for the KmsKeyArn parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.
     */
    KmsKeyArn?: String;
    /**
     * Specifies the accessibility options for the instance profile. A value of true represents an instance profile with a public IP address. A value of false represents an instance profile with a private IP address. The default value is true.
     */
    PubliclyAccessible?: BooleanOptional;
    /**
     * Specifies the network type for the instance profile. A value of IPV4 represents an instance profile with IPv4 network type and only supports IPv4 addressing. A value of IPV6 represents an instance profile with IPv6 network type and only supports IPv6 addressing. A value of DUAL represents an instance profile with dual network type that supports IPv4 and IPv6 addressing.
     */
    NetworkType?: String;
    /**
     * The user-friendly name for the instance profile.
     */
    InstanceProfileName?: String;
    /**
     * A description of the instance profile. Descriptions can have up to 31 characters. A description can contain only ASCII letters, digits, and hyphens ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter.
     */
    Description?: String;
    /**
     * The time the instance profile was created.
     */
    InstanceProfileCreationTime?: Iso8601DateTime;
    /**
     * The identifier of the subnet group that is associated with the instance profile.
     */
    SubnetGroupIdentifier?: String;
    /**
     * The VPC security groups that are used with the instance profile. The VPC security group must work with the VPC containing the instance profile.
     */
    VpcSecurityGroups?: StringList;
  }
  export type InstanceProfileList = InstanceProfile[];
  export type Integer = number;
  export type IntegerList = Integer[];
  export type IntegerOptional = number;
  export interface InventoryData {
    /**
     * The number of databases in the Fleet Advisor collector inventory.
     */
    NumberOfDatabases?: IntegerOptional;
    /**
     * The number of schemas in the Fleet Advisor collector inventory.
     */
    NumberOfSchemas?: IntegerOptional;
  }
  export type Iso8601DateTime = Date;
  export type KafkaSaslMechanism = "scram-sha-512"|"plain"|string;
  export type KafkaSecurityProtocol = "plaintext"|"ssl-authentication"|"ssl-encryption"|"sasl-ssl"|string;
  export interface KafkaSettings {
    /**
     * A comma-separated list of one or more broker locations in your Kafka cluster that host your Kafka instance. Specify each broker location in the form  broker-hostname-or-ip:port . For example, "ec2-12-345-678-901.compute-1.amazonaws.com:2345". For more information and examples of specifying a list of broker locations, see Using Apache Kafka as a target for Database Migration Service in the Database Migration Service User Guide. 
     */
    Broker?: String;
    /**
     * The topic to which you migrate the data. If you don't specify a topic, DMS specifies "kafka-default-topic" as the migration topic.
     */
    Topic?: String;
    /**
     * The output format for the records created on the endpoint. The message format is JSON (default) or JSON_UNFORMATTED (a single line with no tab).
     */
    MessageFormat?: MessageFormatValue;
    /**
     * Provides detailed transaction information from the source database. This information includes a commit timestamp, a log position, and values for transaction_id, previous transaction_id, and transaction_record_id (the record offset within a transaction). The default is false.
     */
    IncludeTransactionDetails?: BooleanOptional;
    /**
     * Shows the partition value within the Kafka message output unless the partition type is schema-table-type. The default is false.
     */
    IncludePartitionValue?: BooleanOptional;
    /**
     * Prefixes schema and table names to partition values, when the partition type is primary-key-type. Doing this increases data distribution among Kafka partitions. For example, suppose that a SysBench schema has thousands of tables and each table has only limited range for a primary key. In this case, the same primary key is sent from thousands of tables to the same partition, which causes throttling. The default is false.
     */
    PartitionIncludeSchemaTable?: BooleanOptional;
    /**
     * Includes any data definition language (DDL) operations that change the table in the control data, such as rename-table, drop-table, add-column, drop-column, and rename-column. The default is false.
     */
    IncludeTableAlterOperations?: BooleanOptional;
    /**
     * Shows detailed control information for table definition, column definition, and table and column changes in the Kafka message output. The default is false.
     */
    IncludeControlDetails?: BooleanOptional;
    /**
     * The maximum size in bytes for records created on the endpoint The default is 1,000,000.
     */
    MessageMaxBytes?: IntegerOptional;
    /**
     * Include NULL and empty columns for records migrated to the endpoint. The default is false.
     */
    IncludeNullAndEmpty?: BooleanOptional;
    /**
     * Set secure connection to a Kafka target endpoint using Transport Layer Security (TLS). Options include ssl-encryption, ssl-authentication, and sasl-ssl. sasl-ssl requires SaslUsername and SaslPassword.
     */
    SecurityProtocol?: KafkaSecurityProtocol;
    /**
     * The Amazon Resource Name (ARN) of the client certificate used to securely connect to a Kafka target endpoint.
     */
    SslClientCertificateArn?: String;
    /**
     * The Amazon Resource Name (ARN) for the client private key used to securely connect to a Kafka target endpoint.
     */
    SslClientKeyArn?: String;
    /**
     *  The password for the client private key used to securely connect to a Kafka target endpoint.
     */
    SslClientKeyPassword?: SecretString;
    /**
     *  The Amazon Resource Name (ARN) for the private certificate authority (CA) cert that DMS uses to securely connect to your Kafka target endpoint.
     */
    SslCaCertificateArn?: String;
    /**
     *  The secure user name you created when you first set up your MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.
     */
    SaslUsername?: String;
    /**
     * The secure password you created when you first set up your MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.
     */
    SaslPassword?: SecretString;
    /**
     * Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format. For example, by default, DMS adds a '0x' prefix to the LOB column type in hexadecimal format moving from an Oracle source to a Kafka target. Use the NoHexPrefix endpoint setting to enable migration of RAW data type columns without adding the '0x' prefix.
     */
    NoHexPrefix?: BooleanOptional;
    /**
     * For SASL/SSL authentication, DMS supports the SCRAM-SHA-512 mechanism by default. DMS versions 3.5.0 and later also support the PLAIN mechanism. To use the PLAIN mechanism, set this parameter to PLAIN. 
     */
    SaslMechanism?: KafkaSaslMechanism;
    /**
     * Sets hostname verification for the certificate. This setting is supported in DMS version 3.5.1 and later. 
     */
    SslEndpointIdentificationAlgorithm?: KafkaSslEndpointIdentificationAlgorithm;
  }
  export type KafkaSslEndpointIdentificationAlgorithm = "none"|"https"|string;
  export type KeyList = String[];
  export interface KinesisSettings {
    /**
     * The Amazon Resource Name (ARN) for the Amazon Kinesis Data Streams endpoint.
     */
    StreamArn?: String;
    /**
     * The output format for the records created on the endpoint. The message format is JSON (default) or JSON_UNFORMATTED (a single line with no tab).
     */
    MessageFormat?: MessageFormatValue;
    /**
     * The Amazon Resource Name (ARN) for the IAM role that DMS uses to write to the Kinesis data stream. The role must allow the iam:PassRole action.
     */
    ServiceAccessRoleArn?: String;
    /**
     * Provides detailed transaction information from the source database. This information includes a commit timestamp, a log position, and values for transaction_id, previous transaction_id, and transaction_record_id (the record offset within a transaction). The default is false.
     */
    IncludeTransactionDetails?: BooleanOptional;
    /**
     * Shows the partition value within the Kinesis message output, unless the partition type is schema-table-type. The default is false.
     */
    IncludePartitionValue?: BooleanOptional;
    /**
     * Prefixes schema and table names to partition values, when the partition type is primary-key-type. Doing this increases data distribution among Kinesis shards. For example, suppose that a SysBench schema has thousands of tables and each table has only limited range for a primary key. In this case, the same primary key is sent from thousands of tables to the same shard, which causes throttling. The default is false.
     */
    PartitionIncludeSchemaTable?: BooleanOptional;
    /**
     * Includes any data definition language (DDL) operations that change the table in the control data, such as rename-table, drop-table, add-column, drop-column, and rename-column. The default is false.
     */
    IncludeTableAlterOperations?: BooleanOptional;
    /**
     * Shows detailed control information for table definition, column definition, and table and column changes in the Kinesis message output. The default is false.
     */
    IncludeControlDetails?: BooleanOptional;
    /**
     * Include NULL and empty columns for records migrated to the endpoint. The default is false.
     */
    IncludeNullAndEmpty?: BooleanOptional;
    /**
     * Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format. For example, by default, DMS adds a '0x' prefix to the LOB column type in hexadecimal format moving from an Oracle source to an Amazon Kinesis target. Use the NoHexPrefix endpoint setting to enable migration of RAW data type columns without adding the '0x' prefix.
     */
    NoHexPrefix?: BooleanOptional;
  }
  export interface Limitation {
    /**
     * The identifier of the source database.
     */
    DatabaseId?: String;
    /**
     * The name of the target engine that Fleet Advisor should use in the target engine recommendation. Valid values include "rds-aurora-mysql", "rds-aurora-postgresql", "rds-mysql", "rds-oracle", "rds-sql-server", and "rds-postgresql".
     */
    EngineName?: String;
    /**
     * The name of the limitation. Describes unsupported database features, migration action items, and other limitations.
     */
    Name?: String;
    /**
     * A description of the limitation. Provides additional information about the limitation, and includes recommended actions that you can take to address or avoid this limitation.
     */
    Description?: String;
    /**
     * The impact of the limitation. You can use this parameter to prioritize limitations that you want to address. Valid values include "Blocker", "High", "Medium", and "Low".
     */
    Impact?: String;
    /**
     * The type of the limitation, such as action required, upgrade required, and limited feature.
     */
    Type?: String;
  }
  export type LimitationList = Limitation[];
  export interface ListTagsForResourceMessage {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the DMS resource to list tags for. This returns a list of keys (names of tags) created for the resource and their associated tag values.
     */
    ResourceArn?: String;
    /**
     * List of ARNs that identify multiple DMS resources that you want to list tags for. This returns a list of keys (tag names) and their associated tag values. It also returns each tag's associated ResourceArn value, which is the ARN of the resource for which each listed tag is created. 
     */
    ResourceArnList?: ArnList;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A list of tags for the resource.
     */
    TagList?: TagList;
  }
  export type Long = number;
  export type LongOptional = number;
  export type LongVarcharMappingType = "wstring"|"clob"|"nclob"|string;
  export interface MariaDbDataProviderSettings {
    /**
     * The name of the MariaDB server.
     */
    ServerName?: String;
    /**
     * The port value for the MariaDB data provider
     */
    Port?: IntegerOptional;
    /**
     * The SSL mode used to connect to the MariaDB data provider. The default value is none.
     */
    SslMode?: DmsSslModeValue;
    /**
     * The Amazon Resource Name (ARN) of the certificate used for SSL connection.
     */
    CertificateArn?: String;
  }
  export type MessageFormatValue = "json"|"json-unformatted"|string;
  export interface MicrosoftSQLServerSettings {
    /**
     * Endpoint TCP port.
     */
    Port?: IntegerOptional;
    /**
     * The maximum size of the packets (in bytes) used to transfer data using BCP.
     */
    BcpPacketSize?: IntegerOptional;
    /**
     * Database name for the endpoint.
     */
    DatabaseName?: String;
    /**
     * Specifies a file group for the DMS internal tables. When the replication task starts, all the internal DMS control tables (awsdms_ apply_exception, awsdms_apply, awsdms_changes) are created for the specified file group.
     */
    ControlTablesFileGroup?: String;
    /**
     * Endpoint connection password.
     */
    Password?: SecretString;
    /**
     * Cleans and recreates table metadata information on the replication instance when a mismatch occurs. An example is a situation where running an alter DDL statement on a table might result in different information about the table cached in the replication instance.
     */
    QuerySingleAlwaysOnNode?: BooleanOptional;
    /**
     * When this attribute is set to Y, DMS only reads changes from transaction log backups and doesn't read from the active transaction log file during ongoing replication. Setting this parameter to Y enables you to control active transaction log file growth during full load and ongoing replication tasks. However, it can add some source latency to ongoing replication.
     */
    ReadBackupOnly?: BooleanOptional;
    /**
     * Use this attribute to minimize the need to access the backup log and enable DMS to prevent truncation using one of the following two methods.  Start transactions in the database: This is the default method. When this method is used, DMS prevents TLOG truncation by mimicking a transaction in the database. As long as such a transaction is open, changes that appear after the transaction started aren't truncated. If you need Microsoft Replication to be enabled in your database, then you must choose this method.  Exclusively use sp_repldone within a single task: When this method is used, DMS reads the changes and then uses sp_repldone to mark the TLOG transactions as ready for truncation. Although this method doesn't involve any transactional activities, it can only be used when Microsoft Replication isn't running. Also, when using this method, only one DMS task can access the database at any given time. Therefore, if you need to run parallel DMS tasks against the same database, use the default method.
     */
    SafeguardPolicy?: SafeguardPolicy;
    /**
     * Fully qualified domain name of the endpoint. For an Amazon RDS SQL Server instance, this is the output of DescribeDBInstances, in the  Endpoint.Address field.
     */
    ServerName?: String;
    /**
     * Endpoint connection user name.
     */
    Username?: String;
    /**
     * Use this to attribute to transfer data for full-load operations using BCP. When the target table contains an identity column that does not exist in the source table, you must disable the use BCP for loading table option.
     */
    UseBcpFullLoad?: BooleanOptional;
    /**
     * When this attribute is set to Y, DMS processes third-party transaction log backups if they are created in native format.
     */
    UseThirdPartyBackupDevice?: BooleanOptional;
    /**
     * The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the Amazon Web Services Secrets Manager secret that allows access to the SQL Server endpoint.  You can specify one of two sets of values for these permissions. You can specify the values for this setting and SecretsManagerSecretId. Or you can specify clear-text values for UserName, Password, ServerName, and Port. You can't specify both. For more information on creating this SecretsManagerSecret and the SecretsManagerAccessRoleArn and SecretsManagerSecretId required to access it, see Using secrets to access Database Migration Service resources in the Database Migration Service User Guide. 
     */
    SecretsManagerAccessRoleArn?: String;
    /**
     * The full ARN, partial ARN, or friendly name of the SecretsManagerSecret that contains the SQL Server endpoint connection details.
     */
    SecretsManagerSecretId?: String;
    /**
     * Use the TrimSpaceInChar source endpoint setting to right-trim data on CHAR and NCHAR data types during migration. Setting TrimSpaceInChar does not left-trim data. The default value is true.
     */
    TrimSpaceInChar?: BooleanOptional;
    /**
     * Indicates the mode used to fetch CDC data.
     */
    TlogAccessMode?: TlogAccessMode;
    /**
     * Forces LOB lookup on inline LOB.
     */
    ForceLobLookup?: BooleanOptional;
  }
  export interface MicrosoftSqlServerDataProviderSettings {
    /**
     * The name of the Microsoft SQL Server server.
     */
    ServerName?: String;
    /**
     * The port value for the Microsoft SQL Server data provider.
     */
    Port?: IntegerOptional;
    /**
     * The database name on the Microsoft SQL Server data provider.
     */
    DatabaseName?: String;
    /**
     * The SSL mode used to connect to the Microsoft SQL Server data provider. The default value is none.
     */
    SslMode?: DmsSslModeValue;
    /**
     * The Amazon Resource Name (ARN) of the certificate used for SSL connection.
     */
    CertificateArn?: String;
  }
  export interface MigrationProject {
    /**
     * The name of the migration project.
     */
    MigrationProjectName?: String;
    /**
     * The ARN string that uniquely identifies the migration project.
     */
    MigrationProjectArn?: String;
    /**
     * The time when the migration project was created.
     */
    MigrationProjectCreationTime?: Iso8601DateTime;
    /**
     * Information about the source data provider, including the name or ARN, and Secrets Manager parameters.
     */
    SourceDataProviderDescriptors?: DataProviderDescriptorList;
    /**
     * Information about the target data provider, including the name or ARN, and Secrets Manager parameters.
     */
    TargetDataProviderDescriptors?: DataProviderDescriptorList;
    /**
     * The Amazon Resource Name (ARN) of the instance profile for your migration project.
     */
    InstanceProfileArn?: String;
    /**
     * The name of the associated instance profile.
     */
    InstanceProfileName?: String;
    /**
     * The settings in JSON format for migration rules. Migration rules make it possible for you to change the object names according to the rules that you specify. For example, you can change an object name to lowercase or uppercase, add or remove a prefix or suffix, or rename objects.
     */
    TransformationRules?: String;
    /**
     * A user-friendly description of the migration project.
     */
    Description?: String;
    /**
     * The schema conversion application attributes, including the Amazon S3 bucket name and Amazon S3 role ARN.
     */
    SchemaConversionApplicationAttributes?: SCApplicationAttributes;
  }
  export type MigrationProjectList = MigrationProject[];
  export type MigrationTypeValue = "full-load"|"cdc"|"full-load-and-cdc"|string;
  export interface ModifyConversionConfigurationMessage {
    /**
     * The migration project name or Amazon Resource Name (ARN).
     */
    MigrationProjectIdentifier: String;
    /**
     * The new conversion configuration.
     */
    ConversionConfiguration: String;
  }
  export interface ModifyConversionConfigurationResponse {
    /**
     * The name or Amazon Resource Name (ARN) of the modified configuration.
     */
    MigrationProjectIdentifier?: String;
  }
  export interface ModifyDataProviderMessage {
    /**
     * The identifier of the data provider. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.
     */
    DataProviderIdentifier: String;
    /**
     * The name of the data provider.
     */
    DataProviderName?: String;
    /**
     * A user-friendly description of the data provider.
     */
    Description?: String;
    /**
     * The type of database engine for the data provider. Valid values include "aurora", "aurora_postgresql", "mysql", "oracle", "postgres", and "sqlserver". A value of "aurora" represents Amazon Aurora MySQL-Compatible Edition.
     */
    Engine?: String;
    /**
     * If this attribute is Y, the current call to ModifyDataProvider replaces all existing data provider settings with the exact settings that you specify in this call. If this attribute is N, the current call to ModifyDataProvider does two things:    It replaces any data provider settings that already exist with new values, for settings with the same names.   It creates new data provider settings that you specify in the call, for settings with different names.   
     */
    ExactSettings?: BooleanOptional;
    /**
     * The settings in JSON format for a data provider.
     */
    Settings?: DataProviderSettings;
  }
  export interface ModifyDataProviderResponse {
    /**
     * The data provider that was modified.
     */
    DataProvider?: DataProvider;
  }
  export interface ModifyEndpointMessage {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn: String;
    /**
     * The database endpoint identifier. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.
     */
    EndpointIdentifier?: String;
    /**
     * The type of endpoint. Valid values are source and target.
     */
    EndpointType?: ReplicationEndpointTypeValue;
    /**
     * The database engine name. Valid values, depending on the EndpointType, include "mysql", "oracle", "postgres", "mariadb", "aurora", "aurora-postgresql", "redshift", "s3", "db2", "db2-zos", "azuredb", "sybase", "dynamodb", "mongodb", "kinesis", "kafka", "elasticsearch", "documentdb", "sqlserver", "neptune", and "babelfish".
     */
    EngineName?: String;
    /**
     * The user name to be used to login to the endpoint database.
     */
    Username?: String;
    /**
     * The password to be used to login to the endpoint database.
     */
    Password?: SecretString;
    /**
     * The name of the server where the endpoint database resides.
     */
    ServerName?: String;
    /**
     * The port used by the endpoint database.
     */
    Port?: IntegerOptional;
    /**
     * The name of the endpoint database. For a MySQL source or target endpoint, do not specify DatabaseName.
     */
    DatabaseName?: String;
    /**
     * Additional attributes associated with the connection. To reset this parameter, pass the empty string ("") as an argument.
     */
    ExtraConnectionAttributes?: String;
    /**
     * The Amazon Resource Name (ARN) of the certificate used for SSL connection.
     */
    CertificateArn?: String;
    /**
     * The SSL mode used to connect to the endpoint. The default value is none.
     */
    SslMode?: DmsSslModeValue;
    /**
     *  The Amazon Resource Name (ARN) for the IAM role you want to use to modify the endpoint. The role must allow the iam:PassRole action.
     */
    ServiceAccessRoleArn?: String;
    /**
     * The external table definition.
     */
    ExternalTableDefinition?: String;
    /**
     * Settings in JSON format for the target Amazon DynamoDB endpoint. For information about other available settings, see Using Object Mapping to Migrate Data to DynamoDB in the Database Migration Service User Guide. 
     */
    DynamoDbSettings?: DynamoDbSettings;
    /**
     * Settings in JSON format for the target Amazon S3 endpoint. For more information about the available settings, see Extra Connection Attributes When Using Amazon S3 as a Target for DMS in the Database Migration Service User Guide. 
     */
    S3Settings?: S3Settings;
    /**
     * The settings in JSON format for the DMS transfer type of source endpoint.  Attributes include the following:   serviceAccessRoleArn - The Amazon Resource Name (ARN) used by the service access IAM role. The role must allow the iam:PassRole action.   BucketName - The name of the S3 bucket to use.   Shorthand syntax for these settings is as follows: ServiceAccessRoleArn=string ,BucketName=string  JSON syntax for these settings is as follows: { "ServiceAccessRoleArn": "string", "BucketName": "string"}  
     */
    DmsTransferSettings?: DmsTransferSettings;
    /**
     * Settings in JSON format for the source MongoDB endpoint. For more information about the available settings, see the configuration properties section in Endpoint configuration settings when using MongoDB as a source for Database Migration Service in the Database Migration Service User Guide. 
     */
    MongoDbSettings?: MongoDbSettings;
    /**
     * Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. For more information about the available settings, see Using object mapping to migrate data to a Kinesis data stream in the Database Migration Service User Guide. 
     */
    KinesisSettings?: KinesisSettings;
    /**
     * Settings in JSON format for the target Apache Kafka endpoint. For more information about the available settings, see Using object mapping to migrate data to a Kafka topic in the Database Migration Service User Guide. 
     */
    KafkaSettings?: KafkaSettings;
    /**
     * Settings in JSON format for the target OpenSearch endpoint. For more information about the available settings, see Extra Connection Attributes When Using OpenSearch as a Target for DMS in the Database Migration Service User Guide. 
     */
    ElasticsearchSettings?: ElasticsearchSettings;
    /**
     * Settings in JSON format for the target Amazon Neptune endpoint. For more information about the available settings, see Specifying graph-mapping rules using Gremlin and R2RML for Amazon Neptune as a target in the Database Migration Service User Guide. 
     */
    NeptuneSettings?: NeptuneSettings;
    RedshiftSettings?: RedshiftSettings;
    /**
     * Settings in JSON format for the source and target PostgreSQL endpoint. For information about other available settings, see Extra connection attributes when using PostgreSQL as a source for DMS and  Extra connection attributes when using PostgreSQL as a target for DMS in the Database Migration Service User Guide. 
     */
    PostgreSQLSettings?: PostgreSQLSettings;
    /**
     * Settings in JSON format for the source and target MySQL endpoint. For information about other available settings, see Extra connection attributes when using MySQL as a source for DMS and Extra connection attributes when using a MySQL-compatible database as a target for DMS in the Database Migration Service User Guide. 
     */
    MySQLSettings?: MySQLSettings;
    /**
     * Settings in JSON format for the source and target Oracle endpoint. For information about other available settings, see Extra connection attributes when using Oracle as a source for DMS and  Extra connection attributes when using Oracle as a target for DMS in the Database Migration Service User Guide. 
     */
    OracleSettings?: OracleSettings;
    /**
     * Settings in JSON format for the source and target SAP ASE endpoint. For information about other available settings, see Extra connection attributes when using SAP ASE as a source for DMS and Extra connection attributes when using SAP ASE as a target for DMS in the Database Migration Service User Guide. 
     */
    SybaseSettings?: SybaseSettings;
    /**
     * Settings in JSON format for the source and target Microsoft SQL Server endpoint. For information about other available settings, see Extra connection attributes when using SQL Server as a source for DMS and  Extra connection attributes when using SQL Server as a target for DMS in the Database Migration Service User Guide. 
     */
    MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings;
    /**
     * Settings in JSON format for the source IBM Db2 LUW endpoint. For information about other available settings, see Extra connection attributes when using Db2 LUW as a source for DMS in the Database Migration Service User Guide. 
     */
    IBMDb2Settings?: IBMDb2Settings;
    /**
     * Settings in JSON format for the source DocumentDB endpoint. For more information about the available settings, see the configuration properties section in  Using DocumentDB as a Target for Database Migration Service  in the Database Migration Service User Guide. 
     */
    DocDbSettings?: DocDbSettings;
    /**
     * Settings in JSON format for the Redis target endpoint.
     */
    RedisSettings?: RedisSettings;
    /**
     * If this attribute is Y, the current call to ModifyEndpoint replaces all existing endpoint settings with the exact settings that you specify in this call. If this attribute is N, the current call to ModifyEndpoint does two things:    It replaces any endpoint settings that already exist with new values, for settings with the same names.   It creates new endpoint settings that you specify in the call, for settings with different names.    For example, if you call create-endpoint ... --endpoint-settings '{"a":1}' ..., the endpoint has the following endpoint settings: '{"a":1}'. If you then call modify-endpoint ... --endpoint-settings '{"b":2}' ... for the same endpoint, the endpoint has the following settings: '{"a":1,"b":2}'.  However, suppose that you follow this with a call to modify-endpoint ... --endpoint-settings '{"b":2}' --exact-settings ... for that same endpoint again. Then the endpoint has the following settings: '{"b":2}'. All existing settings are replaced with the exact settings that you specify. 
     */
    ExactSettings?: BooleanOptional;
    /**
     * Settings in JSON format for the source GCP MySQL endpoint.
     */
    GcpMySQLSettings?: GcpMySQLSettings;
    /**
     * Settings in JSON format for the target Amazon Timestream endpoint.
     */
    TimestreamSettings?: TimestreamSettings;
  }
  export interface ModifyEndpointResponse {
    /**
     * The modified endpoint.
     */
    Endpoint?: Endpoint;
  }
  export interface ModifyEventSubscriptionMessage {
    /**
     * The name of the DMS event notification subscription to be modified.
     */
    SubscriptionName: String;
    /**
     *  The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
     */
    SnsTopicArn?: String;
    /**
     *  The type of DMS resource that generates the events you want to subscribe to.  Valid values: replication-instance | replication-task
     */
    SourceType?: String;
    /**
     *  A list of event categories for a source type that you want to subscribe to. Use the DescribeEventCategories action to see a list of event categories. 
     */
    EventCategories?: EventCategoriesList;
    /**
     *  A Boolean value; set to true to activate the subscription. 
     */
    Enabled?: BooleanOptional;
  }
  export interface ModifyEventSubscriptionResponse {
    /**
     * The modified event subscription.
     */
    EventSubscription?: EventSubscription;
  }
  export interface ModifyInstanceProfileMessage {
    /**
     * The identifier of the instance profile. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.
     */
    InstanceProfileIdentifier: String;
    /**
     * The Availability Zone where the instance profile runs.
     */
    AvailabilityZone?: String;
    /**
     * The Amazon Resource Name (ARN) of the KMS key that is used to encrypt the connection parameters for the instance profile. If you don't specify a value for the KmsKeyArn parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.
     */
    KmsKeyArn?: String;
    /**
     * Specifies the accessibility options for the instance profile. A value of true represents an instance profile with a public IP address. A value of false represents an instance profile with a private IP address. The default value is true.
     */
    PubliclyAccessible?: BooleanOptional;
    /**
     * Specifies the network type for the instance profile. A value of IPV4 represents an instance profile with IPv4 network type and only supports IPv4 addressing. A value of IPV6 represents an instance profile with IPv6 network type and only supports IPv6 addressing. A value of DUAL represents an instance profile with dual network type that supports IPv4 and IPv6 addressing.
     */
    NetworkType?: String;
    /**
     * A user-friendly name for the instance profile.
     */
    InstanceProfileName?: String;
    /**
     * A user-friendly description for the instance profile.
     */
    Description?: String;
    /**
     * A subnet group to associate with the instance profile.
     */
    SubnetGroupIdentifier?: String;
    /**
     * Specifies the VPC security groups to be used with the instance profile. The VPC security group must work with the VPC containing the instance profile.
     */
    VpcSecurityGroups?: StringList;
  }
  export interface ModifyInstanceProfileResponse {
    /**
     * The instance profile that was modified.
     */
    InstanceProfile?: InstanceProfile;
  }
  export interface ModifyMigrationProjectMessage {
    /**
     * The identifier of the migration project. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.
     */
    MigrationProjectIdentifier: String;
    /**
     * A user-friendly name for the migration project.
     */
    MigrationProjectName?: String;
    /**
     * Information about the source data provider, including the name, ARN, and Amazon Web Services Secrets Manager parameters.
     */
    SourceDataProviderDescriptors?: DataProviderDescriptorDefinitionList;
    /**
     * Information about the target data provider, including the name, ARN, and Amazon Web Services Secrets Manager parameters.
     */
    TargetDataProviderDescriptors?: DataProviderDescriptorDefinitionList;
    /**
     * The name or Amazon Resource Name (ARN) for the instance profile.
     */
    InstanceProfileIdentifier?: String;
    /**
     * The settings in JSON format for migration rules. Migration rules make it possible for you to change the object names according to the rules that you specify. For example, you can change an object name to lowercase or uppercase, add or remove a prefix or suffix, or rename objects.
     */
    TransformationRules?: String;
    /**
     * A user-friendly description of the migration project.
     */
    Description?: String;
    /**
     * The schema conversion application attributes, including the Amazon S3 bucket name and Amazon S3 role ARN.
     */
    SchemaConversionApplicationAttributes?: SCApplicationAttributes;
  }
  export interface ModifyMigrationProjectResponse {
    /**
     * The migration project that was modified.
     */
    MigrationProject?: MigrationProject;
  }
  export interface ModifyReplicationConfigMessage {
    /**
     * The Amazon Resource Name of the replication to modify.
     */
    ReplicationConfigArn: String;
    /**
     * The new replication config to apply to the replication.
     */
    ReplicationConfigIdentifier?: String;
    /**
     * The type of replication.
     */
    ReplicationType?: MigrationTypeValue;
    /**
     * Table mappings specified in the replication.
     */
    TableMappings?: String;
    /**
     * The settings for the replication.
     */
    ReplicationSettings?: String;
    /**
     * Additional settings for the replication.
     */
    SupplementalSettings?: String;
    /**
     * Configuration parameters for provisioning an DMS Serverless replication.
     */
    ComputeConfig?: ComputeConfig;
    /**
     * The Amazon Resource Name (ARN) of the source endpoint for this DMS serverless replication configuration.
     */
    SourceEndpointArn?: String;
    /**
     * The Amazon Resource Name (ARN) of the target endpoint for this DMS serverless replication configuration.
     */
    TargetEndpointArn?: String;
  }
  export interface ModifyReplicationConfigResponse {
    /**
     * Information about the serverless replication config that was modified.
     */
    ReplicationConfig?: ReplicationConfig;
  }
  export interface ModifyReplicationInstanceMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn: String;
    /**
     * The amount of storage (in gigabytes) to be allocated for the replication instance.
     */
    AllocatedStorage?: IntegerOptional;
    /**
     * Indicates whether the changes should be applied immediately or during the next maintenance window.
     */
    ApplyImmediately?: Boolean;
    /**
     * The compute and memory capacity of the replication instance as defined for the specified replication instance class. For example to specify the instance class dms.c4.large, set this parameter to "dms.c4.large". For more information on the settings and capacities for the available replication instance classes, see  Selecting the right DMS replication instance for your migration. 
     */
    ReplicationInstanceClass?: String;
    /**
     *  Specifies the VPC security group to be used with the replication instance. The VPC security group must work with the VPC containing the replication instance. 
     */
    VpcSecurityGroupIds?: VpcSecurityGroupIdList;
    /**
     * The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter does not result in an outage, except in the following situation, and the change is asynchronously applied as soon as possible. If moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure pending changes are applied. Default: Uses existing setting Format: ddd:hh24:mi-ddd:hh24:mi Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun Constraints: Must be at least 30 minutes
     */
    PreferredMaintenanceWindow?: String;
    /**
     *  Specifies whether the replication instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the Multi-AZ parameter is set to true. 
     */
    MultiAZ?: BooleanOptional;
    /**
     * The engine version number of the replication instance. When modifying a major engine version of an instance, also set AllowMajorVersionUpgrade to true.
     */
    EngineVersion?: String;
    /**
     * Indicates that major version upgrades are allowed. Changing this parameter does not result in an outage, and the change is asynchronously applied as soon as possible. This parameter must be set to true when specifying a value for the EngineVersion parameter that is a different major version than the replication instance's current version.
     */
    AllowMajorVersionUpgrade?: Boolean;
    /**
     * A value that indicates that minor version upgrades are applied automatically to the replication instance during the maintenance window. Changing this parameter doesn't result in an outage, except in the case described following. The change is asynchronously applied as soon as possible.  An outage does result if these factors apply:    This parameter is set to true during the maintenance window.   A newer minor version is available.    DMS has enabled automatic patching for the given engine version.   
     */
    AutoMinorVersionUpgrade?: BooleanOptional;
    /**
     * The replication instance identifier. This parameter is stored as a lowercase string.
     */
    ReplicationInstanceIdentifier?: String;
    /**
     * The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet supported.
     */
    NetworkType?: String;
  }
  export interface ModifyReplicationInstanceResponse {
    /**
     * The modified replication instance.
     */
    ReplicationInstance?: ReplicationInstance;
  }
  export interface ModifyReplicationSubnetGroupMessage {
    /**
     * The name of the replication instance subnet group.
     */
    ReplicationSubnetGroupIdentifier: String;
    /**
     * A description for the replication instance subnet group.
     */
    ReplicationSubnetGroupDescription?: String;
    /**
     * A list of subnet IDs.
     */
    SubnetIds: SubnetIdentifierList;
  }
  export interface ModifyReplicationSubnetGroupResponse {
    /**
     * The modified replication subnet group.
     */
    ReplicationSubnetGroup?: ReplicationSubnetGroup;
  }
  export interface ModifyReplicationTaskMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication task.
     */
    ReplicationTaskArn: String;
    /**
     * The replication task identifier. Constraints:   Must contain 1-255 alphanumeric characters or hyphens.   First character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.  
     */
    ReplicationTaskIdentifier?: String;
    /**
     * The migration type. Valid values: full-load | cdc | full-load-and-cdc 
     */
    MigrationType?: MigrationTypeValue;
    /**
     * When using the CLI or boto3, provide the path of the JSON file that contains the table mappings. Precede the path with file://. For example, --table-mappings file://mappingfile.json. When working with the DMS API, provide the JSON as the parameter value. 
     */
    TableMappings?: String;
    /**
     * JSON file that contains settings for the task, such as task metadata settings.
     */
    ReplicationTaskSettings?: String;
    /**
     * Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error. Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”
     */
    CdcStartTime?: TStamp;
    /**
     * Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.  The value can be in date, checkpoint, or LSN/SCN format. Date Example: --cdc-start-position “2018-03-08T12:12:12” Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93" LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”  When you use this task setting with a source PostgreSQL database, a logical replication slot should already be created and associated with the source endpoint. You can verify this by setting the slotName extra connection attribute to the name of this logical replication slot. For more information, see Extra Connection Attributes When Using PostgreSQL as a Source for DMS. 
     */
    CdcStartPosition?: String;
    /**
     * Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time. Server time example: --cdc-stop-position “server_time:2018-02-09T12:12:12” Commit time example: --cdc-stop-position “commit_time:2018-02-09T12:12:12“
     */
    CdcStopPosition?: String;
    /**
     * Supplemental information that the task requires to migrate the data for certain source and target endpoints. For more information, see Specifying Supplemental Data for Task Settings in the Database Migration Service User Guide. 
     */
    TaskData?: String;
  }
  export interface ModifyReplicationTaskResponse {
    /**
     * The replication task that was modified.
     */
    ReplicationTask?: ReplicationTask;
  }
  export interface MongoDbDataProviderSettings {
    /**
     * The name of the MongoDB server.
     */
    ServerName?: String;
    /**
     * The port value for the MongoDB data provider.
     */
    Port?: IntegerOptional;
    /**
     * The database name on the MongoDB data provider.
     */
    DatabaseName?: String;
    /**
     * The SSL mode used to connect to the MongoDB data provider. The default value is none.
     */
    SslMode?: DmsSslModeValue;
    /**
     * The Amazon Resource Name (ARN) of the certificate used for SSL connection.
     */
    CertificateArn?: String;
    /**
     * The authentication type for the database connection. Valid values are PASSWORD or NO.
     */
    AuthType?: AuthTypeValue;
    /**
     *  The MongoDB database name. This setting isn't used when AuthType is set to "no".  The default is "admin".
     */
    AuthSource?: String;
    /**
     * The authentication method for connecting to the data provider. Valid values are DEFAULT, MONGODB_CR, or SCRAM_SHA_1.
     */
    AuthMechanism?: AuthMechanismValue;
  }
  export interface MongoDbSettings {
    /**
     * The user name you use to access the MongoDB source endpoint. 
     */
    Username?: String;
    /**
     *  The password for the user account you use to access the MongoDB source endpoint. 
     */
    Password?: SecretString;
    /**
     *  The name of the server on the MongoDB source endpoint. For MongoDB Atlas, provide the server name for any of the servers in the replication set.
     */
    ServerName?: String;
    /**
     *  The port value for the MongoDB source endpoint. 
     */
    Port?: IntegerOptional;
    /**
     *  The database name on the MongoDB source endpoint. 
     */
    DatabaseName?: String;
    /**
     *  The authentication type you use to access the MongoDB source endpoint. When when set to "no", user name and password parameters are not used and can be empty. 
     */
    AuthType?: AuthTypeValue;
    /**
     *  The authentication mechanism you use to access the MongoDB source endpoint. For the default value, in MongoDB version 2.x, "default" is "mongodb_cr". For MongoDB version 3.x or later, "default" is "scram_sha_1". This setting isn't used when AuthType is set to "no".
     */
    AuthMechanism?: AuthMechanismValue;
    /**
     *  Specifies either document or table mode.  Default value is "none". Specify "none" to use document mode. Specify "one" to use table mode.
     */
    NestingLevel?: NestingLevelValue;
    /**
     *  Specifies the document ID. Use this setting when NestingLevel is set to "none".  Default value is "false". 
     */
    ExtractDocId?: String;
    /**
     *  Indicates the number of documents to preview to determine the document organization. Use this setting when NestingLevel is set to "one".  Must be a positive value greater than 0. Default value is 1000.
     */
    DocsToInvestigate?: String;
    /**
     *  The MongoDB database name. This setting isn't used when AuthType is set to "no".  The default is "admin".
     */
    AuthSource?: String;
    /**
     * The KMS key identifier that is used to encrypt the content on the replication instance. If you don't specify a value for the KmsKeyId parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.
     */
    KmsKeyId?: String;
    /**
     * The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the Amazon Web Services Secrets Manager secret that allows access to the MongoDB endpoint.  You can specify one of two sets of values for these permissions. You can specify the values for this setting and SecretsManagerSecretId. Or you can specify clear-text values for UserName, Password, ServerName, and Port. You can't specify both. For more information on creating this SecretsManagerSecret and the SecretsManagerAccessRoleArn and SecretsManagerSecretId required to access it, see Using secrets to access Database Migration Service resources in the Database Migration Service User Guide. 
     */
    SecretsManagerAccessRoleArn?: String;
    /**
     * The full ARN, partial ARN, or friendly name of the SecretsManagerSecret that contains the MongoDB endpoint connection details.
     */
    SecretsManagerSecretId?: String;
    /**
     * If true, DMS retrieves the entire document from the MongoDB source during migration. This may cause a migration failure if the server response exceeds bandwidth limits. To fetch only updates and deletes during migration, set this parameter to false.
     */
    UseUpdateLookUp?: BooleanOptional;
    /**
     * If true, DMS replicates data to shard collections. DMS only uses this setting if the target endpoint is a DocumentDB elastic cluster. When this setting is true, note the following:   You must set TargetTablePrepMode to nothing.   DMS automatically sets useUpdateLookup to false.  
     */
    ReplicateShardCollections?: BooleanOptional;
  }
  export interface MoveReplicationTaskMessage {
    /**
     * The Amazon Resource Name (ARN) of the task that you want to move.
     */
    ReplicationTaskArn: String;
    /**
     * The ARN of the replication instance where you want to move the task to.
     */
    TargetReplicationInstanceArn: String;
  }
  export interface MoveReplicationTaskResponse {
    /**
     * The replication task that was moved.
     */
    ReplicationTask?: ReplicationTask;
  }
  export interface MySQLSettings {
    /**
     * Specifies a script to run immediately after DMS connects to the endpoint. The migration task continues running regardless if the SQL statement succeeds or fails. For this parameter, provide the code of the script itself, not the name of a file containing the script.
     */
    AfterConnectScript?: String;
    /**
     * Cleans and recreates table metadata information on the replication instance when a mismatch occurs. For example, in a situation where running an alter DDL on the table could result in different information about the table cached in the replication instance. 
     */
    CleanSourceMetadataOnMismatch?: BooleanOptional;
    /**
     * Database name for the endpoint. For a MySQL source or target endpoint, don't explicitly specify the database using the DatabaseName request parameter on either the CreateEndpoint or ModifyEndpoint API call. Specifying DatabaseName when you create or modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.
     */
    DatabaseName?: String;
    /**
     * Specifies how often to check the binary log for new changes/events when the database is idle. The default is five seconds. Example: eventsPollInterval=5;  In the example, DMS checks for changes in the binary logs every five seconds.
     */
    EventsPollInterval?: IntegerOptional;
    /**
     * Specifies where to migrate source tables on the target, either to a single database or multiple databases. If you specify SPECIFIC_DATABASE, specify the database name using the DatabaseName parameter of the Endpoint object. Example: targetDbType=MULTIPLE_DATABASES 
     */
    TargetDbType?: TargetDbType;
    /**
     * Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database. Example: maxFileSize=512 
     */
    MaxFileSize?: IntegerOptional;
    /**
     * Improves performance when loading data into the MySQL-compatible target database. Specifies how many threads to use to load the data into the MySQL-compatible target database. Setting a large number of threads can have an adverse effect on database performance, because a separate connection is required for each thread. The default is one. Example: parallelLoadThreads=1 
     */
    ParallelLoadThreads?: IntegerOptional;
    /**
     * Endpoint connection password.
     */
    Password?: SecretString;
    /**
     * Endpoint TCP port.
     */
    Port?: IntegerOptional;
    /**
     * The host name of the endpoint database.  For an Amazon RDS MySQL instance, this is the output of DescribeDBInstances, in the  Endpoint.Address field. For an Aurora MySQL instance, this is the output of DescribeDBClusters, in the Endpoint field.
     */
    ServerName?: String;
    /**
     * Specifies the time zone for the source MySQL database. Example: serverTimezone=US/Pacific;  Note: Do not enclose time zones in single quotes.
     */
    ServerTimezone?: String;
    /**
     * Endpoint connection user name.
     */
    Username?: String;
    /**
     * The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the Amazon Web Services Secrets Manager secret that allows access to the MySQL endpoint.  You can specify one of two sets of values for these permissions. You can specify the values for this setting and SecretsManagerSecretId. Or you can specify clear-text values for UserName, Password, ServerName, and Port. You can't specify both. For more information on creating this SecretsManagerSecret and the SecretsManagerAccessRoleArn and SecretsManagerSecretId required to access it, see Using secrets to access Database Migration Service resources in the Database Migration Service User Guide. 
     */
    SecretsManagerAccessRoleArn?: String;
    /**
     * The full ARN, partial ARN, or friendly name of the SecretsManagerSecret that contains the MySQL endpoint connection details.
     */
    SecretsManagerSecretId?: String;
  }
  export interface MySqlDataProviderSettings {
    /**
     * The name of the MySQL server.
     */
    ServerName?: String;
    /**
     * The port value for the MySQL data provider.
     */
    Port?: IntegerOptional;
    /**
     * The SSL mode used to connect to the MySQL data provider. The default value is none.
     */
    SslMode?: DmsSslModeValue;
    /**
     * The Amazon Resource Name (ARN) of the certificate used for SSL connection.
     */
    CertificateArn?: String;
  }
  export interface NeptuneSettings {
    /**
     * The Amazon Resource Name (ARN) of the service role that you created for the Neptune target endpoint. The role must allow the iam:PassRole action. For more information, see Creating an IAM Service Role for Accessing Amazon Neptune as a Target in the Database Migration Service User Guide.  
     */
    ServiceAccessRoleArn?: String;
    /**
     * The name of the Amazon S3 bucket where DMS can temporarily store migrated graph data in .csv files before bulk-loading it to the Neptune target database. DMS maps the SQL source data to graph data before storing it in these .csv files.
     */
    S3BucketName: String;
    /**
     * A folder path where you want DMS to store migrated graph data in the S3 bucket specified by S3BucketName 
     */
    S3BucketFolder: String;
    /**
     * The number of milliseconds for DMS to wait to retry a bulk-load of migrated graph data to the Neptune target database before raising an error. The default is 250.
     */
    ErrorRetryDuration?: IntegerOptional;
    /**
     * The maximum size in kilobytes of migrated graph data stored in a .csv file before DMS bulk-loads the data to the Neptune target database. The default is 1,048,576 KB. If the bulk load is successful, DMS clears the bucket, ready to store the next batch of migrated graph data.
     */
    MaxFileSize?: IntegerOptional;
    /**
     * The number of times for DMS to retry a bulk load of migrated graph data to the Neptune target database before raising an error. The default is 5.
     */
    MaxRetryCount?: IntegerOptional;
    /**
     * If you want Identity and Access Management (IAM) authorization enabled for this endpoint, set this parameter to true. Then attach the appropriate IAM policy document to your service role specified by ServiceAccessRoleArn. The default is false.
     */
    IamAuthEnabled?: BooleanOptional;
  }
  export type NestingLevelValue = "none"|"one"|string;
  export interface OracleDataProviderSettings {
    /**
     * The name of the Oracle server.
     */
    ServerName?: String;
    /**
     * The port value for the Oracle data provider.
     */
    Port?: IntegerOptional;
    /**
     * The database name on the Oracle data provider.
     */
    DatabaseName?: String;
    /**
     * The SSL mode used to connect to the Oracle data provider. The default value is none.
     */
    SslMode?: DmsSslModeValue;
    /**
     * The Amazon Resource Name (ARN) of the certificate used for SSL connection.
     */
    CertificateArn?: String;
    /**
     * The address of your Oracle Automatic Storage Management (ASM) server. You can set this value from the asm_server value. You set asm_server as part of the extra connection attribute string to access an Oracle server with Binary Reader that uses ASM. For more information, see Configuration for change data capture (CDC) on an Oracle source database.
     */
    AsmServer?: String;
    /**
     * The identifier of the secret in Secrets Manager that contains the Oracle ASM connection details. Required only if your data provider uses the Oracle ASM server.
     */
    SecretsManagerOracleAsmSecretId?: String;
    /**
     * The ARN of the IAM role that provides access to the secret in Secrets Manager that contains the Oracle ASM connection details.
     */
    SecretsManagerOracleAsmAccessRoleArn?: String;
    /**
     * The identifier of the secret in Secrets Manager that contains the transparent data encryption (TDE) password. DMS requires this password to access Oracle redo logs encrypted by TDE using Binary Reader.
     */
    SecretsManagerSecurityDbEncryptionSecretId?: String;
    /**
     * The ARN of the IAM role that provides access to the secret in Secrets Manager that contains the TDE password.
     */
    SecretsManagerSecurityDbEncryptionAccessRoleArn?: String;
  }
  export interface OracleSettings {
    /**
     * Set this attribute to set up table-level supplemental logging for the Oracle database. This attribute enables PRIMARY KEY supplemental logging on all tables selected for a migration task. If you use this option, you still need to enable database-level supplemental logging.
     */
    AddSupplementalLogging?: BooleanOptional;
    /**
     * Specifies the ID of the destination for the archived redo logs. This value should be the same as a number in the dest_id column of the v$archived_log view. If you work with an additional redo log destination, use the AdditionalArchivedLogDestId option to specify the additional destination ID. Doing this improves performance by ensuring that the correct logs are accessed from the outset.
     */
    ArchivedLogDestId?: IntegerOptional;
    /**
     * Set this attribute with ArchivedLogDestId in a primary/ standby setup. This attribute is useful in the case of a switchover. In this case, DMS needs to know which destination to get archive redo logs from to read changes. This need arises because the previous primary instance is now a standby instance after switchover. Although DMS supports the use of the Oracle RESETLOGS option to open the database, never use RESETLOGS unless necessary. For additional information about RESETLOGS, see RMAN Data Repair Concepts in the Oracle Database Backup and Recovery User's Guide.
     */
    AdditionalArchivedLogDestId?: IntegerOptional;
    /**
     * Specifies the IDs of one more destinations for one or more archived redo logs. These IDs are the values of the dest_id column in the v$archived_log view. Use this setting with the archivedLogDestId extra connection attribute in a primary-to-single setup or a primary-to-multiple-standby setup.  This setting is useful in a switchover when you use an Oracle Data Guard database as a source. In this case, DMS needs information about what destination to get archive redo logs from to read changes. DMS needs this because after the switchover the previous primary is a standby instance. For example, in a primary-to-single standby setup you might apply the following settings.   archivedLogDestId=1; ExtraArchivedLogDestIds=[2]  In a primary-to-multiple-standby setup, you might apply the following settings.  archivedLogDestId=1; ExtraArchivedLogDestIds=[2,3,4]  Although DMS supports the use of the Oracle RESETLOGS option to open the database, never use RESETLOGS unless it's necessary. For more information about RESETLOGS, see  RMAN Data Repair Concepts in the Oracle Database Backup and Recovery User's Guide.
     */
    ExtraArchivedLogDestIds?: IntegerList;
    /**
     * Set this attribute to true to enable replication of Oracle tables containing columns that are nested tables or defined types.
     */
    AllowSelectNestedTables?: BooleanOptional;
    /**
     * Set this attribute to change the number of threads that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM). You can specify an integer value between 2 (the default) and 8 (the maximum). Use this attribute together with the readAheadBlocks attribute.
     */
    ParallelAsmReadThreads?: IntegerOptional;
    /**
     * Set this attribute to change the number of read-ahead blocks that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM). You can specify an integer value between 1000 (the default) and 200,000 (the maximum).
     */
    ReadAheadBlocks?: IntegerOptional;
    /**
     * Set this attribute to false in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. This tells the DMS instance to not access redo logs through any specified path prefix replacement using direct file access.
     */
    AccessAlternateDirectly?: BooleanOptional;
    /**
     * Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. This tells the DMS instance to use any specified prefix replacement to access all online redo logs.
     */
    UseAlternateFolderForOnline?: BooleanOptional;
    /**
     * Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. This value specifies the default Oracle root used to access the redo logs.
     */
    OraclePathPrefix?: String;
    /**
     * Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. This value specifies the path prefix used to replace the default Oracle root to access the redo logs.
     */
    UsePathPrefix?: String;
    /**
     * Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. This setting tells DMS instance to replace the default Oracle root with the specified usePathPrefix setting to access the redo logs.
     */
    ReplacePathPrefix?: BooleanOptional;
    /**
     * Set this attribute to enable homogenous tablespace replication and create existing tables or indexes under the same tablespace on the target.
     */
    EnableHomogenousTablespace?: BooleanOptional;
    /**
     * When set to true, this attribute helps to increase the commit rate on the Oracle target database by writing directly to tables and not writing a trail to database logs.
     */
    DirectPathNoLog?: BooleanOptional;
    /**
     * When this field is set to Y, DMS only accesses the archived redo logs. If the archived redo logs are stored on Automatic Storage Management (ASM) only, the DMS user account needs to be granted ASM privileges.
     */
    ArchivedLogsOnly?: BooleanOptional;
    /**
     * For an Oracle source endpoint, your Oracle Automatic Storage Management (ASM) password. You can set this value from the  asm_user_password  value. You set this value as part of the comma-separated value that you set to the Password request parameter when you create the endpoint to access transaction logs using Binary Reader. For more information, see Configuration for change data capture (CDC) on an Oracle source database.
     */
    AsmPassword?: SecretString;
    /**
     * For an Oracle source endpoint, your ASM server address. You can set this value from the asm_server value. You set asm_server as part of the extra connection attribute string to access an Oracle server with Binary Reader that uses ASM. For more information, see Configuration for change data capture (CDC) on an Oracle source database.
     */
    AsmServer?: String;
    /**
     * For an Oracle source endpoint, your ASM user name. You can set this value from the asm_user value. You set asm_user as part of the extra connection attribute string to access an Oracle server with Binary Reader that uses ASM. For more information, see Configuration for change data capture (CDC) on an Oracle source database.
     */
    AsmUser?: String;
    /**
     * Specifies whether the length of a character column is in bytes or in characters. To indicate that the character column length is in characters, set this attribute to CHAR. Otherwise, the character column length is in bytes. Example: charLengthSemantics=CHAR; 
     */
    CharLengthSemantics?: CharLengthSemantics;
    /**
     * Database name for the endpoint.
     */
    DatabaseName?: String;
    /**
     * When set to true, this attribute specifies a parallel load when useDirectPathFullLoad is set to Y. This attribute also only applies when you use the DMS parallel load feature. Note that the target table cannot have any constraints or indexes.
     */
    DirectPathParallelLoad?: BooleanOptional;
    /**
     * When set to true, this attribute causes a task to fail if the actual size of an LOB column is greater than the specified LobMaxSize. If a task is set to limited LOB mode and this option is set to true, the task fails instead of truncating the LOB data.
     */
    FailTasksOnLobTruncation?: BooleanOptional;
    /**
     * Specifies the number scale. You can select a scale up to 38, or you can select FLOAT. By default, the NUMBER data type is converted to precision 38, scale 10. Example: numberDataTypeScale=12 
     */
    NumberDatatypeScale?: IntegerOptional;
    /**
     * Endpoint connection password.
     */
    Password?: SecretString;
    /**
     * Endpoint TCP port.
     */
    Port?: IntegerOptional;
    /**
     * When set to true, this attribute supports tablespace replication.
     */
    ReadTableSpaceName?: BooleanOptional;
    /**
     * Specifies the number of seconds that the system waits before resending a query. Example: retryInterval=6; 
     */
    RetryInterval?: IntegerOptional;
    /**
     * For an Oracle source endpoint, the transparent data encryption (TDE) password required by AWM DMS to access Oracle redo logs encrypted by TDE using Binary Reader. It is also the  TDE_Password  part of the comma-separated value you set to the Password request parameter when you create the endpoint. The SecurityDbEncryptian setting is related to this SecurityDbEncryptionName setting. For more information, see  Supported encryption methods for using Oracle as a source for DMS  in the Database Migration Service User Guide. 
     */
    SecurityDbEncryption?: SecretString;
    /**
     * For an Oracle source endpoint, the name of a key used for the transparent data encryption (TDE) of the columns and tablespaces in an Oracle source database that is encrypted using TDE. The key value is the value of the SecurityDbEncryption setting. For more information on setting the key name value of SecurityDbEncryptionName, see the information and example for setting the securityDbEncryptionName extra connection attribute in  Supported encryption methods for using Oracle as a source for DMS  in the Database Migration Service User Guide.
     */
    SecurityDbEncryptionName?: String;
    /**
     * Fully qualified domain name of the endpoint. For an Amazon RDS Oracle instance, this is the output of DescribeDBInstances, in the  Endpoint.Address field.
     */
    ServerName?: String;
    /**
     * Use this attribute to convert SDO_GEOMETRY to GEOJSON format. By default, DMS calls the SDO2GEOJSON custom function if present and accessible. Or you can create your own custom function that mimics the operation of SDOGEOJSON and set SpatialDataOptionToGeoJsonFunctionName to call it instead. 
     */
    SpatialDataOptionToGeoJsonFunctionName?: String;
    /**
     * Use this attribute to specify a time in minutes for the delay in standby sync. If the source is an Oracle Active Data Guard standby database, use this attribute to specify the time lag between primary and standby databases. In DMS, you can create an Oracle CDC task that uses an Active Data Guard standby instance as a source for replicating ongoing changes. Doing this eliminates the need to connect to an active database that might be in production.
     */
    StandbyDelayTime?: IntegerOptional;
    /**
     * Endpoint connection user name.
     */
    Username?: String;
    /**
     * Set this attribute to Y to capture change data using the Binary Reader utility. Set UseLogminerReader to N to set this attribute to Y. To use Binary Reader with Amazon RDS for Oracle as the source, you set additional attributes. For more information about using this setting with Oracle Automatic Storage Management (ASM), see  Using Oracle LogMiner or DMS Binary Reader for CDC.
     */
    UseBFile?: BooleanOptional;
    /**
     * Set this attribute to Y to have DMS use a direct path full load. Specify this value to use the direct path protocol in the Oracle Call Interface (OCI). By using this OCI protocol, you can bulk-load Oracle target tables during a full load.
     */
    UseDirectPathFullLoad?: BooleanOptional;
    /**
     * Set this attribute to Y to capture change data using the Oracle LogMiner utility (the default). Set this attribute to N if you want to access the redo logs as a binary file. When you set UseLogminerReader to N, also set UseBfile to Y. For more information on this setting and using Oracle ASM, see  Using Oracle LogMiner or DMS Binary Reader for CDC in the DMS User Guide.
     */
    UseLogminerReader?: BooleanOptional;
    /**
     * The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the Amazon Web Services Secrets Manager secret that allows access to the Oracle endpoint.  You can specify one of two sets of values for these permissions. You can specify the values for this setting and SecretsManagerSecretId. Or you can specify clear-text values for UserName, Password, ServerName, and Port. You can't specify both. For more information on creating this SecretsManagerSecret and the SecretsManagerAccessRoleArn and SecretsManagerSecretId required to access it, see Using secrets to access Database Migration Service resources in the Database Migration Service User Guide. 
     */
    SecretsManagerAccessRoleArn?: String;
    /**
     * The full ARN, partial ARN, or friendly name of the SecretsManagerSecret that contains the Oracle endpoint connection details.
     */
    SecretsManagerSecretId?: String;
    /**
     * Required only if your Oracle endpoint uses Automatic Storage Management (ASM). The full ARN of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the SecretsManagerOracleAsmSecret. This SecretsManagerOracleAsmSecret has the secret value that allows access to the Oracle ASM of the endpoint.  You can specify one of two sets of values for these permissions. You can specify the values for this setting and SecretsManagerOracleAsmSecretId. Or you can specify clear-text values for AsmUser, AsmPassword, and AsmServerName. You can't specify both. For more information on creating this SecretsManagerOracleAsmSecret and the SecretsManagerOracleAsmAccessRoleArn and SecretsManagerOracleAsmSecretId required to access it, see Using secrets to access Database Migration Service resources in the Database Migration Service User Guide. 
     */
    SecretsManagerOracleAsmAccessRoleArn?: String;
    /**
     * Required only if your Oracle endpoint uses Automatic Storage Management (ASM). The full ARN, partial ARN, or friendly name of the SecretsManagerOracleAsmSecret that contains the Oracle ASM connection details for the Oracle endpoint.
     */
    SecretsManagerOracleAsmSecretId?: String;
    /**
     * Use the TrimSpaceInChar source endpoint setting to trim data on CHAR and NCHAR data types during migration. The default value is true.
     */
    TrimSpaceInChar?: BooleanOptional;
    /**
     * When true, converts timestamps with the timezone datatype to their UTC value.
     */
    ConvertTimestampWithZoneToUTC?: BooleanOptional;
    /**
     * The timeframe in minutes to check for open transactions for a CDC-only task. You can specify an integer value between 0 (the default) and 240 (the maximum).   This parameter is only valid in DMS version 3.5.0 and later. DMS supports a window of up to 9.5 hours including the value for OpenTransactionWindow. 
     */
    OpenTransactionWindow?: IntegerOptional;
  }
  export interface OrderableReplicationInstance {
    /**
     * The version of the replication engine.
     */
    EngineVersion?: String;
    /**
     * The compute and memory capacity of the replication instance as defined for the specified replication instance class. For example to specify the instance class dms.c4.large, set this parameter to "dms.c4.large". For more information on the settings and capacities for the available replication instance classes, see  Selecting the right DMS replication instance for your migration. 
     */
    ReplicationInstanceClass?: String;
    /**
     * The type of storage used by the replication instance.
     */
    StorageType?: String;
    /**
     * The minimum amount of storage (in gigabytes) that can be allocated for the replication instance.
     */
    MinAllocatedStorage?: Integer;
    /**
     * The minimum amount of storage (in gigabytes) that can be allocated for the replication instance.
     */
    MaxAllocatedStorage?: Integer;
    /**
     * The default amount of storage (in gigabytes) that is allocated for the replication instance.
     */
    DefaultAllocatedStorage?: Integer;
    /**
     * The amount of storage (in gigabytes) that is allocated for the replication instance.
     */
    IncludedAllocatedStorage?: Integer;
    /**
     * List of Availability Zones for this replication instance.
     */
    AvailabilityZones?: AvailabilityZonesList;
    /**
     * The value returned when the specified EngineVersion of the replication instance is in Beta or test mode. This indicates some features might not work as expected.  DMS supports the ReleaseStatus parameter in versions 3.1.4 and later. 
     */
    ReleaseStatus?: ReleaseStatusValues;
  }
  export type OrderableReplicationInstanceList = OrderableReplicationInstance[];
  export type OriginTypeValue = "SOURCE"|"TARGET"|string;
  export type ParquetVersionValue = "parquet-1-0"|"parquet-2-0"|string;
  export interface PendingMaintenanceAction {
    /**
     * The type of pending maintenance action that is available for the resource.
     */
    Action?: String;
    /**
     * The date of the maintenance window when the action is to be applied. The maintenance action is applied to the resource during its first maintenance window after this date. If this date is specified, any next-maintenance opt-in requests are ignored.
     */
    AutoAppliedAfterDate?: TStamp;
    /**
     * The date when the maintenance action will be automatically applied. The maintenance action is applied to the resource on this date regardless of the maintenance window for the resource. If this date is specified, any immediate opt-in requests are ignored.
     */
    ForcedApplyDate?: TStamp;
    /**
     * The type of opt-in request that has been received for the resource.
     */
    OptInStatus?: String;
    /**
     * The effective date when the pending maintenance action will be applied to the resource. This date takes into account opt-in requests received from the ApplyPendingMaintenanceAction API operation, and also the AutoAppliedAfterDate and ForcedApplyDate parameter values. This value is blank if an opt-in request has not been received and nothing has been specified for AutoAppliedAfterDate or ForcedApplyDate.
     */
    CurrentApplyDate?: TStamp;
    /**
     * A description providing more detail about the maintenance action.
     */
    Description?: String;
  }
  export type PendingMaintenanceActionDetails = PendingMaintenanceAction[];
  export type PendingMaintenanceActions = ResourcePendingMaintenanceActions[];
  export type PluginNameValue = "no-preference"|"test-decoding"|"pglogical"|string;
  export interface PostgreSQLSettings {
    /**
     * For use with change data capture (CDC) only, this attribute has DMS bypass foreign keys and user triggers to reduce the time it takes to bulk load data. Example: afterConnectScript=SET session_replication_role='replica' 
     */
    AfterConnectScript?: String;
    /**
     * To capture DDL events, DMS creates various artifacts in the PostgreSQL database when the task starts. You can later remove these artifacts. If this value is set to N, you don't have to create tables or triggers on the source database.
     */
    CaptureDdls?: BooleanOptional;
    /**
     * Specifies the maximum size (in KB) of any .csv file used to transfer data to PostgreSQL. Example: maxFileSize=512 
     */
    MaxFileSize?: IntegerOptional;
    /**
     * Database name for the endpoint.
     */
    DatabaseName?: String;
    /**
     * The schema in which the operational DDL database artifacts are created. Example: ddlArtifactsSchema=xyzddlschema; 
     */
    DdlArtifactsSchema?: String;
    /**
     * Sets the client statement timeout for the PostgreSQL instance, in seconds. The default value is 60 seconds. Example: executeTimeout=100; 
     */
    ExecuteTimeout?: IntegerOptional;
    /**
     * When set to true, this value causes a task to fail if the actual size of a LOB column is greater than the specified LobMaxSize. If task is set to Limited LOB mode and this option is set to true, the task fails instead of truncating the LOB data.
     */
    FailTasksOnLobTruncation?: BooleanOptional;
    /**
     * The write-ahead log (WAL) heartbeat feature mimics a dummy transaction. By doing this, it prevents idle logical replication slots from holding onto old WAL logs, which can result in storage full situations on the source. This heartbeat keeps restart_lsn moving and prevents storage full scenarios.
     */
    HeartbeatEnable?: BooleanOptional;
    /**
     * Sets the schema in which the heartbeat artifacts are created.
     */
    HeartbeatSchema?: String;
    /**
     * Sets the WAL heartbeat frequency (in minutes).
     */
    HeartbeatFrequency?: IntegerOptional;
    /**
     * Endpoint connection password.
     */
    Password?: SecretString;
    /**
     * Endpoint TCP port. The default is 5432.
     */
    Port?: IntegerOptional;
    /**
     * The host name of the endpoint database.  For an Amazon RDS PostgreSQL instance, this is the output of DescribeDBInstances, in the  Endpoint.Address field. For an Aurora PostgreSQL instance, this is the output of DescribeDBClusters, in the Endpoint field.
     */
    ServerName?: String;
    /**
     * Endpoint connection user name.
     */
    Username?: String;
    /**
     * Sets the name of a previously created logical replication slot for a change data capture (CDC) load of the PostgreSQL source instance.  When used with the CdcStartPosition request parameter for the DMS API , this attribute also makes it possible to use native CDC start points. DMS verifies that the specified logical replication slot exists before starting the CDC load task. It also verifies that the task was created with a valid setting of CdcStartPosition. If the specified slot doesn't exist or the task doesn't have a valid CdcStartPosition setting, DMS raises an error. For more information about setting the CdcStartPosition request parameter, see Determining a CDC native start point in the Database Migration Service User Guide. For more information about using CdcStartPosition, see CreateReplicationTask, StartReplicationTask, and ModifyReplicationTask.
     */
    SlotName?: String;
    /**
     * Specifies the plugin to use to create a replication slot.
     */
    PluginName?: PluginNameValue;
    /**
     * The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the Amazon Web Services Secrets Manager secret that allows access to the PostgreSQL endpoint.  You can specify one of two sets of values for these permissions. You can specify the values for this setting and SecretsManagerSecretId. Or you can specify clear-text values for UserName, Password, ServerName, and Port. You can't specify both. For more information on creating this SecretsManagerSecret and the SecretsManagerAccessRoleArn and SecretsManagerSecretId required to access it, see Using secrets to access Database Migration Service resources in the Database Migration Service User Guide. 
     */
    SecretsManagerAccessRoleArn?: String;
    /**
     * The full ARN, partial ARN, or friendly name of the SecretsManagerSecret that contains the PostgreSQL endpoint connection details.
     */
    SecretsManagerSecretId?: String;
    /**
     * Use the TrimSpaceInChar source endpoint setting to trim data on CHAR and NCHAR data types during migration. The default value is true.
     */
    TrimSpaceInChar?: BooleanOptional;
    /**
     * When true, lets PostgreSQL migrate the boolean type as boolean. By default, PostgreSQL migrates booleans as varchar(5). You must set this setting on both the source and target endpoints for it to take effect.
     */
    MapBooleanAsBoolean?: BooleanOptional;
    /**
     * When true, DMS migrates JSONB values as CLOB.
     */
    MapJsonbAsClob?: BooleanOptional;
    /**
     * When true, DMS migrates LONG values as VARCHAR.
     */
    MapLongVarcharAs?: LongVarcharMappingType;
    /**
     * Specifies the default behavior of the replication's handling of PostgreSQL- compatible endpoints that require some additional configuration, such as Babelfish endpoints.
     */
    DatabaseMode?: DatabaseMode;
    /**
     * The Babelfish for Aurora PostgreSQL database name for the endpoint.
     */
    BabelfishDatabaseName?: String;
  }
  export interface PostgreSqlDataProviderSettings {
    /**
     * The name of the PostgreSQL server.
     */
    ServerName?: String;
    /**
     * The port value for the PostgreSQL data provider.
     */
    Port?: IntegerOptional;
    /**
     * The database name on the PostgreSQL data provider.
     */
    DatabaseName?: String;
    /**
     * The SSL mode used to connect to the PostgreSQL data provider. The default value is none.
     */
    SslMode?: DmsSslModeValue;
    /**
     * The Amazon Resource Name (ARN) of the certificate used for SSL connection.
     */
    CertificateArn?: String;
  }
  export interface ProvisionData {
    /**
     * The current provisioning state 
     */
    ProvisionState?: String;
    /**
     * The number of capacity units the replication is using.
     */
    ProvisionedCapacityUnits?: Integer;
    /**
     * The timestamp when DMS provisioned replication resources.
     */
    DateProvisioned?: TStamp;
    /**
     * Whether the new provisioning is available to the replication.
     */
    IsNewProvisioningAvailable?: Boolean;
    /**
     * The timestamp when provisioning became available.
     */
    DateNewProvisioningDataAvailable?: TStamp;
    /**
     * A message describing the reason that DMS provisioned new resources for the serverless replication.
     */
    ReasonForNewProvisioningData?: String;
  }
  export interface RdsConfiguration {
    /**
     * Describes the recommended target Amazon RDS engine edition.
     */
    EngineEdition?: String;
    /**
     * Describes the recommended target Amazon RDS instance type.
     */
    InstanceType?: String;
    /**
     * Describes the number of virtual CPUs (vCPU) on the recommended Amazon RDS DB instance that meets your requirements.
     */
    InstanceVcpu?: DoubleOptional;
    /**
     * Describes the memory on the recommended Amazon RDS DB instance that meets your requirements.
     */
    InstanceMemory?: DoubleOptional;
    /**
     * Describes the storage type of the recommended Amazon RDS DB instance that meets your requirements. Amazon RDS provides three storage types: General Purpose SSD (also known as gp2 and gp3), Provisioned IOPS SSD (also known as io1), and magnetic (also known as standard).
     */
    StorageType?: String;
    /**
     * Describes the storage size of the recommended Amazon RDS DB instance that meets your requirements.
     */
    StorageSize?: IntegerOptional;
    /**
     * Describes the number of I/O operations completed each second (IOPS) on the recommended Amazon RDS DB instance that meets your requirements.
     */
    StorageIops?: IntegerOptional;
    /**
     * Describes the deployment option for the recommended Amazon RDS DB instance. The deployment options include Multi-AZ and Single-AZ deployments. Valid values include "MULTI_AZ" and "SINGLE_AZ".
     */
    DeploymentOption?: String;
    /**
     * Describes the recommended target Amazon RDS engine version.
     */
    EngineVersion?: String;
  }
  export interface RdsRecommendation {
    /**
     * Supplemental information about the requirements to the recommended target database on Amazon RDS.
     */
    RequirementsToTarget?: RdsRequirements;
    /**
     * Supplemental information about the configuration of the recommended target database on Amazon RDS.
     */
    TargetConfiguration?: RdsConfiguration;
  }
  export interface RdsRequirements {
    /**
     * The required target Amazon RDS engine edition.
     */
    EngineEdition?: String;
    /**
     * The required number of virtual CPUs (vCPU) on the Amazon RDS DB instance.
     */
    InstanceVcpu?: DoubleOptional;
    /**
     * The required memory on the Amazon RDS DB instance.
     */
    InstanceMemory?: DoubleOptional;
    /**
     * The required Amazon RDS DB instance storage size.
     */
    StorageSize?: IntegerOptional;
    /**
     * The required number of I/O operations completed each second (IOPS) on your Amazon RDS DB instance.
     */
    StorageIops?: IntegerOptional;
    /**
     * The required deployment option for the Amazon RDS DB instance. Valid values include "MULTI_AZ" for Multi-AZ deployments and "SINGLE_AZ" for Single-AZ deployments.
     */
    DeploymentOption?: String;
    /**
     * The required target Amazon RDS engine version.
     */
    EngineVersion?: String;
  }
  export interface RebootReplicationInstanceMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn: String;
    /**
     * If this parameter is true, the reboot is conducted through a Multi-AZ failover. If the instance isn't configured for Multi-AZ, then you can't specify true. ( --force-planned-failover and --force-failover can't both be set to true.)
     */
    ForceFailover?: BooleanOptional;
    /**
     * If this parameter is true, the reboot is conducted through a planned Multi-AZ failover where resources are released and cleaned up prior to conducting the failover. If the instance isn''t configured for Multi-AZ, then you can't specify true. ( --force-planned-failover and --force-failover can't both be set to true.)
     */
    ForcePlannedFailover?: BooleanOptional;
  }
  export interface RebootReplicationInstanceResponse {
    /**
     * The replication instance that is being rebooted. 
     */
    ReplicationInstance?: ReplicationInstance;
  }
  export interface Recommendation {
    /**
     * The identifier of the source database for which Fleet Advisor provided this recommendation.
     */
    DatabaseId?: String;
    /**
     * The name of the target engine. Valid values include "rds-aurora-mysql", "rds-aurora-postgresql", "rds-mysql", "rds-oracle", "rds-sql-server", and "rds-postgresql".
     */
    EngineName?: String;
    /**
     * The date when Fleet Advisor created the target engine recommendation.
     */
    CreatedDate?: String;
    /**
     * The status of the target engine recommendation. Valid values include "alternate", "in-progress", "not-viable", and "recommended".
     */
    Status?: String;
    /**
     * Indicates that this target is the rightsized migration destination.
     */
    Preferred?: BooleanOptional;
    /**
     * The settings in JSON format for the preferred target engine parameters. These parameters include capacity, resource utilization, and the usage type (production, development, or testing).
     */
    Settings?: RecommendationSettings;
    /**
     * The recommendation of a target engine for the specified source database.
     */
    Data?: RecommendationData;
  }
  export interface RecommendationData {
    /**
     * The recommendation of a target Amazon RDS database engine.
     */
    RdsEngine?: RdsRecommendation;
  }
  export type RecommendationList = Recommendation[];
  export interface RecommendationSettings {
    /**
     * The size of your target instance. Fleet Advisor calculates this value based on your data collection type, such as total capacity and resource utilization. Valid values include "total-capacity" and "utilization".
     */
    InstanceSizingType: String;
    /**
     * The deployment option for your target engine. For production databases, Fleet Advisor chooses Multi-AZ deployment. For development or test databases, Fleet Advisor chooses Single-AZ deployment. Valid values include "development" and "production".
     */
    WorkloadType: String;
  }
  export type RedisAuthTypeValue = "none"|"auth-role"|"auth-token"|string;
  export interface RedisSettings {
    /**
     * Fully qualified domain name of the endpoint.
     */
    ServerName: String;
    /**
     * Transmission Control Protocol (TCP) port for the endpoint.
     */
    Port: Integer;
    /**
     * The connection to a Redis target endpoint using Transport Layer Security (TLS). Valid values include plaintext and ssl-encryption. The default is ssl-encryption. The ssl-encryption option makes an encrypted connection. Optionally, you can identify an Amazon Resource Name (ARN) for an SSL certificate authority (CA) using the SslCaCertificateArn setting. If an ARN isn't given for a CA, DMS uses the Amazon root CA. The plaintext option doesn't provide Transport Layer Security (TLS) encryption for traffic between endpoint and database.
     */
    SslSecurityProtocol?: SslSecurityProtocolValue;
    /**
     * The type of authentication to perform when connecting to a Redis target. Options include none, auth-token, and auth-role. The auth-token option requires an AuthPassword value to be provided. The auth-role option requires AuthUserName and AuthPassword values to be provided.
     */
    AuthType?: RedisAuthTypeValue;
    /**
     * The user name provided with the auth-role option of the AuthType setting for a Redis target endpoint.
     */
    AuthUserName?: String;
    /**
     * The password provided with the auth-role and auth-token options of the AuthType setting for a Redis target endpoint.
     */
    AuthPassword?: SecretString;
    /**
     * The Amazon Resource Name (ARN) for the certificate authority (CA) that DMS uses to connect to your Redis target endpoint.
     */
    SslCaCertificateArn?: String;
  }
  export interface RedshiftDataProviderSettings {
    /**
     * The name of the Amazon Redshift server.
     */
    ServerName?: String;
    /**
     * The port value for the Amazon Redshift data provider.
     */
    Port?: IntegerOptional;
    /**
     * The database name on the Amazon Redshift data provider.
     */
    DatabaseName?: String;
  }
  export interface RedshiftSettings {
    /**
     * A value that indicates to allow any date format, including invalid formats such as 00/00/00 00:00:00, to be loaded without generating an error. You can choose true or false (the default). This parameter applies only to TIMESTAMP and DATE columns. Always use ACCEPTANYDATE with the DATEFORMAT parameter. If the date format for the data doesn't match the DATEFORMAT specification, Amazon Redshift inserts a NULL value into that field. 
     */
    AcceptAnyDate?: BooleanOptional;
    /**
     * Code to run after connecting. This parameter should contain the code itself, not the name of a file containing the code.
     */
    AfterConnectScript?: String;
    /**
     * An S3 folder where the comma-separated-value (.csv) files are stored before being uploaded to the target Redshift cluster.  For full load mode, DMS converts source records into .csv files and loads them to the BucketFolder/TableID path. DMS uses the Redshift COPY command to upload the .csv files to the target table. The files are deleted once the COPY operation has finished. For more information, see COPY in the Amazon Redshift Database Developer Guide. For change-data-capture (CDC) mode, DMS creates a NetChanges table, and loads the .csv files to this BucketFolder/NetChangesTableID path.
     */
    BucketFolder?: String;
    /**
     * The name of the intermediate S3 bucket used to store .csv files before uploading data to Redshift.
     */
    BucketName?: String;
    /**
     * If Amazon Redshift is configured to support case sensitive schema names, set CaseSensitiveNames to true. The default is false.
     */
    CaseSensitiveNames?: BooleanOptional;
    /**
     * If you set CompUpdate to true Amazon Redshift applies automatic compression if the table is empty. This applies even if the table columns already have encodings other than RAW. If you set CompUpdate to false, automatic compression is disabled and existing column encodings aren't changed. The default is true.
     */
    CompUpdate?: BooleanOptional;
    /**
     * A value that sets the amount of time to wait (in milliseconds) before timing out, beginning from when you initially establish a connection.
     */
    ConnectionTimeout?: IntegerOptional;
    /**
     * The name of the Amazon Redshift data warehouse (service) that you are working with.
     */
    DatabaseName?: String;
    /**
     * The date format that you are using. Valid values are auto (case-sensitive), your date format string enclosed in quotes, or NULL. If this parameter is left unset (NULL), it defaults to a format of 'YYYY-MM-DD'. Using auto recognizes most strings, even some that aren't supported when you use a date format string.  If your date and time values use formats different from each other, set this to auto. 
     */
    DateFormat?: String;
    /**
     * A value that specifies whether DMS should migrate empty CHAR and VARCHAR fields as NULL. A value of true sets empty CHAR and VARCHAR fields to null. The default is false.
     */
    EmptyAsNull?: BooleanOptional;
    /**
     * The type of server-side encryption that you want to use for your data. This encryption type is part of the endpoint settings or the extra connections attributes for Amazon S3. You can choose either SSE_S3 (the default) or SSE_KMS.   For the ModifyEndpoint operation, you can change the existing value of the EncryptionMode parameter from SSE_KMS to SSE_S3. But you can’t change the existing value from SSE_S3 to SSE_KMS.  To use SSE_S3, create an Identity and Access Management (IAM) role with a policy that allows "arn:aws:s3:::*" to use the following actions: "s3:PutObject", "s3:ListBucket" 
     */
    EncryptionMode?: EncryptionModeValue;
    /**
     * This setting is only valid for a full-load migration task. Set ExplicitIds to true to have tables with IDENTITY columns override their auto-generated values with explicit values loaded from the source data files used to populate the tables. The default is false.
     */
    ExplicitIds?: BooleanOptional;
    /**
     * The number of threads used to upload a single file. This parameter accepts a value from 1 through 64. It defaults to 10. The number of parallel streams used to upload a single .csv file to an S3 bucket using S3 Multipart Upload. For more information, see Multipart upload overview.   FileTransferUploadStreams accepts a value from 1 through 64. It defaults to 10.
     */
    FileTransferUploadStreams?: IntegerOptional;
    /**
     * The amount of time to wait (in milliseconds) before timing out of operations performed by DMS on a Redshift cluster, such as Redshift COPY, INSERT, DELETE, and UPDATE.
     */
    LoadTimeout?: IntegerOptional;
    /**
     * The maximum size (in KB) of any .csv file used to load data on an S3 bucket and transfer data to Amazon Redshift. It defaults to 1048576KB (1 GB).
     */
    MaxFileSize?: IntegerOptional;
    /**
     * The password for the user named in the username property.
     */
    Password?: SecretString;
    /**
     * The port number for Amazon Redshift. The default value is 5439.
     */
    Port?: IntegerOptional;
    /**
     * A value that specifies to remove surrounding quotation marks from strings in the incoming data. All characters within the quotation marks, including delimiters, are retained. Choose true to remove quotation marks. The default is false.
     */
    RemoveQuotes?: BooleanOptional;
    /**
     * A list of characters that you want to replace. Use with ReplaceChars.
     */
    ReplaceInvalidChars?: String;
    /**
     * A value that specifies to replaces the invalid characters specified in ReplaceInvalidChars, substituting the specified characters instead. The default is "?".
     */
    ReplaceChars?: String;
    /**
     * The name of the Amazon Redshift cluster you are using.
     */
    ServerName?: String;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that has access to the Amazon Redshift service. The role must allow the iam:PassRole action.
     */
    ServiceAccessRoleArn?: String;
    /**
     * The KMS key ID. If you are using SSE_KMS for the EncryptionMode, provide this key ID. The key that you use needs an attached policy that enables IAM user permissions and allows use of the key.
     */
    ServerSideEncryptionKmsKeyId?: String;
    /**
     * The time format that you want to use. Valid values are auto (case-sensitive), 'timeformat_string', 'epochsecs', or 'epochmillisecs'. It defaults to 10. Using auto recognizes most strings, even some that aren't supported when you use a time format string.  If your date and time values use formats different from each other, set this parameter to auto. 
     */
    TimeFormat?: String;
    /**
     * A value that specifies to remove the trailing white space characters from a VARCHAR string. This parameter applies only to columns with a VARCHAR data type. Choose true to remove unneeded white space. The default is false.
     */
    TrimBlanks?: BooleanOptional;
    /**
     * A value that specifies to truncate data in columns to the appropriate number of characters, so that the data fits in the column. This parameter applies only to columns with a VARCHAR or CHAR data type, and rows with a size of 4 MB or less. Choose true to truncate data. The default is false.
     */
    TruncateColumns?: BooleanOptional;
    /**
     * An Amazon Redshift user name for a registered user.
     */
    Username?: String;
    /**
     * The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk at the DMS replication instance. The default value is 1000 (buffer size is 1000KB).
     */
    WriteBufferSize?: IntegerOptional;
    /**
     * The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the Amazon Web Services Secrets Manager secret that allows access to the Amazon Redshift endpoint.  You can specify one of two sets of values for these permissions. You can specify the values for this setting and SecretsManagerSecretId. Or you can specify clear-text values for UserName, Password, ServerName, and Port. You can't specify both. For more information on creating this SecretsManagerSecret and the SecretsManagerAccessRoleArn and SecretsManagerSecretId required to access it, see Using secrets to access Database Migration Service resources in the Database Migration Service User Guide. 
     */
    SecretsManagerAccessRoleArn?: String;
    /**
     * The full ARN, partial ARN, or friendly name of the SecretsManagerSecret that contains the Amazon Redshift endpoint connection details.
     */
    SecretsManagerSecretId?: String;
    /**
     * When true, lets Redshift migrate the boolean type as boolean. By default, Redshift migrates booleans as varchar(1). You must set this setting on both the source and target endpoints for it to take effect.
     */
    MapBooleanAsBoolean?: BooleanOptional;
  }
  export interface RefreshSchemasMessage {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn: String;
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn: String;
  }
  export interface RefreshSchemasResponse {
    /**
     * The status of the refreshed schema.
     */
    RefreshSchemasStatus?: RefreshSchemasStatus;
  }
  export interface RefreshSchemasStatus {
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn?: String;
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn?: String;
    /**
     * The status of the schema.
     */
    Status?: RefreshSchemasStatusTypeValue;
    /**
     * The date the schema was last refreshed.
     */
    LastRefreshDate?: TStamp;
    /**
     * The last failure message for the schema.
     */
    LastFailureMessage?: String;
  }
  export type RefreshSchemasStatusTypeValue = "successful"|"failed"|"refreshing"|string;
  export type ReleaseStatusValues = "beta"|"prod"|string;
  export type ReloadOptionValue = "data-reload"|"validate-only"|string;
  export interface ReloadReplicationTablesMessage {
    /**
     * The Amazon Resource Name of the replication config for which to reload tables.
     */
    ReplicationConfigArn: String;
    /**
     * The list of tables to reload.
     */
    TablesToReload: TableListToReload;
    /**
     * Options for reload. Specify data-reload to reload the data and re-validate it if validation is enabled. Specify validate-only to re-validate the table. This option applies only when validation is enabled for the replication. 
     */
    ReloadOption?: ReloadOptionValue;
  }
  export interface ReloadReplicationTablesResponse {
    /**
     * The Amazon Resource Name of the replication config for which to reload tables.
     */
    ReplicationConfigArn?: String;
  }
  export interface ReloadTablesMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication task. 
     */
    ReplicationTaskArn: String;
    /**
     * The name and schema of the table to be reloaded. 
     */
    TablesToReload: TableListToReload;
    /**
     * Options for reload. Specify data-reload to reload the data and re-validate it if validation is enabled. Specify validate-only to re-validate the table. This option applies only when validation is enabled for the task.  Valid values: data-reload, validate-only Default value is data-reload.
     */
    ReloadOption?: ReloadOptionValue;
  }
  export interface ReloadTablesResponse {
    /**
     * The Amazon Resource Name (ARN) of the replication task. 
     */
    ReplicationTaskArn?: String;
  }
  export interface RemoveTagsFromResourceMessage {
    /**
     * An DMS resource from which you want to remove tag(s). The value for this parameter is an Amazon Resource Name (ARN).
     */
    ResourceArn: String;
    /**
     * The tag key (name) of the tag to be removed.
     */
    TagKeys: KeyList;
  }
  export interface RemoveTagsFromResourceResponse {
  }
  export interface Replication {
    /**
     * The identifier for the ReplicationConfig associated with the replication.
     */
    ReplicationConfigIdentifier?: String;
    /**
     * The Amazon Resource Name for the ReplicationConfig associated with the replication.
     */
    ReplicationConfigArn?: String;
    /**
     * The Amazon Resource Name for an existing Endpoint the serverless replication uses for its data source.
     */
    SourceEndpointArn?: String;
    /**
     * The Amazon Resource Name for an existing Endpoint the serverless replication uses for its data target.
     */
    TargetEndpointArn?: String;
    /**
     * The type of the serverless replication.
     */
    ReplicationType?: MigrationTypeValue;
    /**
     * The current status of the serverless replication.
     */
    Status?: String;
    /**
     * Information about provisioning resources for an DMS serverless replication.
     */
    ProvisionData?: ProvisionData;
    /**
     * The reason the replication task was stopped. This response parameter can return one of the following values:    "Stop Reason NORMAL"     "Stop Reason RECOVERABLE_ERROR"     "Stop Reason FATAL_ERROR"     "Stop Reason FULL_LOAD_ONLY_FINISHED"     "Stop Reason STOPPED_AFTER_FULL_LOAD" – Full load completed, with cached changes not applied    "Stop Reason STOPPED_AFTER_CACHED_EVENTS" – Full load completed, with cached changes applied    "Stop Reason EXPRESS_LICENSE_LIMITS_REACHED"     "Stop Reason STOPPED_AFTER_DDL_APPLY" – User-defined stop task after DDL applied    "Stop Reason STOPPED_DUE_TO_LOW_MEMORY"     "Stop Reason STOPPED_DUE_TO_LOW_DISK"     "Stop Reason STOPPED_AT_SERVER_TIME" – User-defined server time for stopping task    "Stop Reason STOPPED_AT_COMMIT_TIME" – User-defined commit time for stopping task    "Stop Reason RECONFIGURATION_RESTART"     "Stop Reason RECYCLE_TASK"   
     */
    StopReason?: String;
    /**
     * Error and other information about why a serverless replication failed.
     */
    FailureMessages?: StringList;
    /**
     * This object provides a collection of statistics about a serverless replication.
     */
    ReplicationStats?: ReplicationStats;
    /**
     * The replication type.
     */
    StartReplicationType?: String;
    /**
     * Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error.
     */
    CdcStartTime?: TStamp;
    /**
     * Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error.
     */
    CdcStartPosition?: String;
    /**
     * Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time.
     */
    CdcStopPosition?: String;
    /**
     * Indicates the last checkpoint that occurred during a change data capture (CDC) operation. You can provide this value to the CdcStartPosition parameter to start a CDC operation that begins at that checkpoint.
     */
    RecoveryCheckpoint?: String;
    /**
     * The time the serverless replication was created.
     */
    ReplicationCreateTime?: TStamp;
    /**
     * The time the serverless replication was updated.
     */
    ReplicationUpdateTime?: TStamp;
    /**
     * The timestamp when replication was last stopped.
     */
    ReplicationLastStopTime?: TStamp;
  }
  export interface ReplicationConfig {
    /**
     * The identifier for the ReplicationConfig associated with the replication.
     */
    ReplicationConfigIdentifier?: String;
    /**
     * The Amazon Resource Name (ARN) of this DMS Serverless replication configuration.
     */
    ReplicationConfigArn?: String;
    /**
     * The Amazon Resource Name (ARN) of the source endpoint for this DMS serverless replication configuration.
     */
    SourceEndpointArn?: String;
    /**
     * The Amazon Resource Name (ARN) of the target endpoint for this DMS serverless replication configuration.
     */
    TargetEndpointArn?: String;
    /**
     * The type of the replication.
     */
    ReplicationType?: MigrationTypeValue;
    /**
     * Configuration parameters for provisioning an DMS serverless replication.
     */
    ComputeConfig?: ComputeConfig;
    /**
     * Configuration parameters for an DMS serverless replication.
     */
    ReplicationSettings?: String;
    /**
     * Additional parameters for an DMS serverless replication.
     */
    SupplementalSettings?: String;
    /**
     * Table mappings specified in the replication.
     */
    TableMappings?: String;
    /**
     * The time the serverless replication config was created.
     */
    ReplicationConfigCreateTime?: TStamp;
    /**
     * The time the serverless replication config was updated.
     */
    ReplicationConfigUpdateTime?: TStamp;
  }
  export type ReplicationConfigList = ReplicationConfig[];
  export type ReplicationEndpointTypeValue = "source"|"target"|string;
  export interface ReplicationInstance {
    /**
     * The replication instance identifier is a required parameter. This parameter is stored as a lowercase string. Constraints:   Must contain 1-63 alphanumeric characters or hyphens.   First character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.   Example: myrepinstance 
     */
    ReplicationInstanceIdentifier?: String;
    /**
     * The compute and memory capacity of the replication instance as defined for the specified replication instance class. It is a required parameter, although a default value is pre-selected in the DMS console. For more information on the settings and capacities for the available replication instance classes, see  Selecting the right DMS replication instance for your migration. 
     */
    ReplicationInstanceClass?: String;
    /**
     * The status of the replication instance. The possible return values include:    "available"     "creating"     "deleted"     "deleting"     "failed"     "modifying"     "upgrading"     "rebooting"     "resetting-master-credentials"     "storage-full"     "incompatible-credentials"     "incompatible-network"     "maintenance"   
     */
    ReplicationInstanceStatus?: String;
    /**
     * The amount of storage (in gigabytes) that is allocated for the replication instance.
     */
    AllocatedStorage?: Integer;
    /**
     * The time the replication instance was created.
     */
    InstanceCreateTime?: TStamp;
    /**
     * The VPC security group for the instance.
     */
    VpcSecurityGroups?: VpcSecurityGroupMembershipList;
    /**
     * The Availability Zone for the instance.
     */
    AvailabilityZone?: String;
    /**
     * The subnet group for the replication instance.
     */
    ReplicationSubnetGroup?: ReplicationSubnetGroup;
    /**
     * The maintenance window times for the replication instance. Any pending upgrades to the replication instance are performed during this time.
     */
    PreferredMaintenanceWindow?: String;
    /**
     * The pending modification values.
     */
    PendingModifiedValues?: ReplicationPendingModifiedValues;
    /**
     *  Specifies whether the replication instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the Multi-AZ parameter is set to true. 
     */
    MultiAZ?: Boolean;
    /**
     * The engine version number of the replication instance. If an engine version number is not specified when a replication instance is created, the default is the latest engine version available. When modifying a major engine version of an instance, also set AllowMajorVersionUpgrade to true.
     */
    EngineVersion?: String;
    /**
     * Boolean value indicating if minor version upgrades will be automatically applied to the instance.
     */
    AutoMinorVersionUpgrade?: Boolean;
    /**
     * An KMS key identifier that is used to encrypt the data on the replication instance. If you don't specify a value for the KmsKeyId parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.
     */
    KmsKeyId?: String;
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn?: String;
    /**
     * The public IP address of the replication instance.
     */
    ReplicationInstancePublicIpAddress?: String;
    /**
     * The private IP address of the replication instance.
     */
    ReplicationInstancePrivateIpAddress?: String;
    /**
     * One or more public IP addresses for the replication instance.
     */
    ReplicationInstancePublicIpAddresses?: ReplicationInstancePublicIpAddressList;
    /**
     * One or more private IP addresses for the replication instance.
     */
    ReplicationInstancePrivateIpAddresses?: ReplicationInstancePrivateIpAddressList;
    /**
     * One or more IPv6 addresses for the replication instance.
     */
    ReplicationInstanceIpv6Addresses?: ReplicationInstanceIpv6AddressList;
    /**
     *  Specifies the accessibility options for the replication instance. A value of true represents an instance with a public IP address. A value of false represents an instance with a private IP address. The default value is true. 
     */
    PubliclyAccessible?: Boolean;
    /**
     * The Availability Zone of the standby replication instance in a Multi-AZ deployment.
     */
    SecondaryAvailabilityZone?: String;
    /**
     *  The expiration date of the free replication instance that is part of the Free DMS program. 
     */
    FreeUntil?: TStamp;
    /**
     * The DNS name servers supported for the replication instance to access your on-premise source or target database.
     */
    DnsNameServers?: String;
    /**
     * The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet supported.
     */
    NetworkType?: String;
  }
  export type ReplicationInstanceIpv6AddressList = String[];
  export type ReplicationInstanceList = ReplicationInstance[];
  export type ReplicationInstancePrivateIpAddressList = String[];
  export type ReplicationInstancePublicIpAddressList = String[];
  export interface ReplicationInstanceTaskLog {
    /**
     * The name of the replication task.
     */
    ReplicationTaskName?: String;
    /**
     * The Amazon Resource Name (ARN) of the replication task.
     */
    ReplicationTaskArn?: String;
    /**
     * The size, in bytes, of the replication task log.
     */
    ReplicationInstanceTaskLogSize?: Long;
  }
  export type ReplicationInstanceTaskLogsList = ReplicationInstanceTaskLog[];
  export type ReplicationList = Replication[];
  export interface ReplicationPendingModifiedValues {
    /**
     * The compute and memory capacity of the replication instance as defined for the specified replication instance class. For more information on the settings and capacities for the available replication instance classes, see  Selecting the right DMS replication instance for your migration. 
     */
    ReplicationInstanceClass?: String;
    /**
     * The amount of storage (in gigabytes) that is allocated for the replication instance.
     */
    AllocatedStorage?: IntegerOptional;
    /**
     *  Specifies whether the replication instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the Multi-AZ parameter is set to true. 
     */
    MultiAZ?: BooleanOptional;
    /**
     * The engine version number of the replication instance.
     */
    EngineVersion?: String;
    /**
     * The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet supported.
     */
    NetworkType?: String;
  }
  export interface ReplicationStats {
    /**
     * The percent complete for the full load serverless replication.
     */
    FullLoadProgressPercent?: Integer;
    /**
     * The elapsed time of the replication, in milliseconds.
     */
    ElapsedTimeMillis?: Long;
    /**
     * The number of tables loaded for this replication.
     */
    TablesLoaded?: Integer;
    /**
     * The number of tables currently loading for this replication.
     */
    TablesLoading?: Integer;
    /**
     * The number of tables queued for this replication.
     */
    TablesQueued?: Integer;
    /**
     * The number of errors that have occured for this replication.
     */
    TablesErrored?: Integer;
    /**
     * The date the replication was started either with a fresh start or a target reload.
     */
    FreshStartDate?: TStamp;
    /**
     * The date the replication is scheduled to start.
     */
    StartDate?: TStamp;
    /**
     * The date the replication was stopped.
     */
    StopDate?: TStamp;
    /**
     * The date the replication full load was started.
     */
    FullLoadStartDate?: TStamp;
    /**
     * The date the replication full load was finished.
     */
    FullLoadFinishDate?: TStamp;
  }
  export interface ReplicationSubnetGroup {
    /**
     * The identifier of the replication instance subnet group.
     */
    ReplicationSubnetGroupIdentifier?: String;
    /**
     * A description for the replication subnet group.
     */
    ReplicationSubnetGroupDescription?: String;
    /**
     * The ID of the VPC.
     */
    VpcId?: String;
    /**
     * The status of the subnet group.
     */
    SubnetGroupStatus?: String;
    /**
     * The subnets that are in the subnet group.
     */
    Subnets?: SubnetList;
    /**
     * The IP addressing protocol supported by the subnet group. This is used by a replication instance with values such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet supported.
     */
    SupportedNetworkTypes?: StringList;
  }
  export type ReplicationSubnetGroups = ReplicationSubnetGroup[];
  export type ReplicationTableStatisticsList = TableStatistics[];
  export interface ReplicationTask {
    /**
     * The user-assigned replication task identifier or name. Constraints:   Must contain 1-255 alphanumeric characters or hyphens.   First character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.  
     */
    ReplicationTaskIdentifier?: String;
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies the endpoint.
     */
    SourceEndpointArn?: String;
    /**
     * The ARN that uniquely identifies the endpoint.
     */
    TargetEndpointArn?: String;
    /**
     * The ARN of the replication instance.
     */
    ReplicationInstanceArn?: String;
    /**
     * The type of migration.
     */
    MigrationType?: MigrationTypeValue;
    /**
     * Table mappings specified in the task.
     */
    TableMappings?: String;
    /**
     * The settings for the replication task.
     */
    ReplicationTaskSettings?: String;
    /**
     * The status of the replication task. This response parameter can return one of the following values:    "moving" – The task is being moved in response to running the  MoveReplicationTask  operation.    "creating" – The task is being created in response to running the  CreateReplicationTask  operation.    "deleting" – The task is being deleted in response to running the  DeleteReplicationTask  operation.    "failed" – The task failed to successfully complete the database migration in response to running the  StartReplicationTask  operation.    "failed-move" – The task failed to move in response to running the  MoveReplicationTask  operation.    "modifying" – The task definition is being modified in response to running the  ModifyReplicationTask  operation.    "ready" – The task is in a ready state where it can respond to other task operations, such as  StartReplicationTask  or  DeleteReplicationTask .     "running" – The task is performing a database migration in response to running the  StartReplicationTask  operation.    "starting" – The task is preparing to perform a database migration in response to running the  StartReplicationTask  operation.    "stopped" – The task has stopped in response to running the  StopReplicationTask  operation.    "stopping" – The task is preparing to stop in response to running the  StopReplicationTask  operation.    "testing" – The database migration specified for this task is being tested in response to running either the  StartReplicationTaskAssessmentRun  or the  StartReplicationTaskAssessment  operation.    StartReplicationTaskAssessmentRun  is an improved premigration task assessment operation. The  StartReplicationTaskAssessment  operation assesses data type compatibility only between the source and target database of a given migration task. In contrast,  StartReplicationTaskAssessmentRun  enables you to specify a variety of premigration task assessments in addition to data type compatibility. These assessments include ones for the validity of primary key definitions and likely issues with database migration performance, among others.   
     */
    Status?: String;
    /**
     * The last error (failure) message generated for the replication task.
     */
    LastFailureMessage?: String;
    /**
     * The reason the replication task was stopped. This response parameter can return one of the following values:    "Stop Reason NORMAL"     "Stop Reason RECOVERABLE_ERROR"     "Stop Reason FATAL_ERROR"     "Stop Reason FULL_LOAD_ONLY_FINISHED"     "Stop Reason STOPPED_AFTER_FULL_LOAD" – Full load completed, with cached changes not applied    "Stop Reason STOPPED_AFTER_CACHED_EVENTS" – Full load completed, with cached changes applied    "Stop Reason EXPRESS_LICENSE_LIMITS_REACHED"     "Stop Reason STOPPED_AFTER_DDL_APPLY" – User-defined stop task after DDL applied    "Stop Reason STOPPED_DUE_TO_LOW_MEMORY"     "Stop Reason STOPPED_DUE_TO_LOW_DISK"     "Stop Reason STOPPED_AT_SERVER_TIME" – User-defined server time for stopping task    "Stop Reason STOPPED_AT_COMMIT_TIME" – User-defined commit time for stopping task    "Stop Reason RECONFIGURATION_RESTART"     "Stop Reason RECYCLE_TASK"   
     */
    StopReason?: String;
    /**
     * The date the replication task was created.
     */
    ReplicationTaskCreationDate?: TStamp;
    /**
     * The date the replication task is scheduled to start.
     */
    ReplicationTaskStartDate?: TStamp;
    /**
     * Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want the CDC operation to start. Specifying both values results in an error. The value can be in date, checkpoint, or LSN/SCN format. Date Example: --cdc-start-position “2018-03-08T12:12:12” Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93" LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”
     */
    CdcStartPosition?: String;
    /**
     * Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time. Server time example: --cdc-stop-position “server_time:2018-02-09T12:12:12” Commit time example: --cdc-stop-position “commit_time:2018-02-09T12:12:12“
     */
    CdcStopPosition?: String;
    /**
     * Indicates the last checkpoint that occurred during a change data capture (CDC) operation. You can provide this value to the CdcStartPosition parameter to start a CDC operation that begins at that checkpoint.
     */
    RecoveryCheckpoint?: String;
    /**
     * The Amazon Resource Name (ARN) of the replication task.
     */
    ReplicationTaskArn?: String;
    /**
     * The statistics for the task, including elapsed time, tables loaded, and table errors.
     */
    ReplicationTaskStats?: ReplicationTaskStats;
    /**
     * Supplemental information that the task requires to migrate the data for certain source and target endpoints. For more information, see Specifying Supplemental Data for Task Settings in the Database Migration Service User Guide. 
     */
    TaskData?: String;
    /**
     * The ARN of the replication instance to which this task is moved in response to running the  MoveReplicationTask  operation. Otherwise, this response parameter isn't a member of the ReplicationTask object.
     */
    TargetReplicationInstanceArn?: String;
  }
  export interface ReplicationTaskAssessmentResult {
    /**
     *  The replication task identifier of the task on which the task assessment was run. 
     */
    ReplicationTaskIdentifier?: String;
    /**
     * The Amazon Resource Name (ARN) of the replication task. 
     */
    ReplicationTaskArn?: String;
    /**
     * The date the task assessment was completed. 
     */
    ReplicationTaskLastAssessmentDate?: TStamp;
    /**
     *  The status of the task assessment. 
     */
    AssessmentStatus?: String;
    /**
     *  The file containing the results of the task assessment. 
     */
    AssessmentResultsFile?: String;
    /**
     *  The task assessment results in JSON format.  The response object only contains this field if you provide DescribeReplicationTaskAssessmentResultsMessage$ReplicationTaskArn in the request.
     */
    AssessmentResults?: String;
    /**
     *  The URL of the S3 object containing the task assessment results.  The response object only contains this field if you provide DescribeReplicationTaskAssessmentResultsMessage$ReplicationTaskArn in the request.
     */
    S3ObjectUrl?: String;
  }
  export type ReplicationTaskAssessmentResultList = ReplicationTaskAssessmentResult[];
  export interface ReplicationTaskAssessmentRun {
    /**
     * Amazon Resource Name (ARN) of this assessment run.
     */
    ReplicationTaskAssessmentRunArn?: String;
    /**
     * ARN of the migration task associated with this premigration assessment run.
     */
    ReplicationTaskArn?: String;
    /**
     * Assessment run status.  This status can have one of the following values:    "cancelling" – The assessment run was canceled by the CancelReplicationTaskAssessmentRun operation.    "deleting" – The assessment run was deleted by the DeleteReplicationTaskAssessmentRun operation.    "failed" – At least one individual assessment completed with a failed status.    "error-provisioning" – An internal error occurred while resources were provisioned (during provisioning status).    "error-executing" – An internal error occurred while individual assessments ran (during running status).    "invalid state" – The assessment run is in an unknown state.    "passed" – All individual assessments have completed, and none has a failed status.    "provisioning" – Resources required to run individual assessments are being provisioned.    "running" – Individual assessments are being run.    "starting" – The assessment run is starting, but resources are not yet being provisioned for individual assessments.  
     */
    Status?: String;
    /**
     * Date on which the assessment run was created using the StartReplicationTaskAssessmentRun operation.
     */
    ReplicationTaskAssessmentRunCreationDate?: TStamp;
    /**
     * Indication of the completion progress for the individual assessments specified to run.
     */
    AssessmentProgress?: ReplicationTaskAssessmentRunProgress;
    /**
     * Last message generated by an individual assessment failure.
     */
    LastFailureMessage?: String;
    /**
     * ARN of the service role used to start the assessment run using the StartReplicationTaskAssessmentRun operation. The role must allow the iam:PassRole action.
     */
    ServiceAccessRoleArn?: String;
    /**
     * Amazon S3 bucket where DMS stores the results of this assessment run.
     */
    ResultLocationBucket?: String;
    /**
     * Folder in an Amazon S3 bucket where DMS stores the results of this assessment run.
     */
    ResultLocationFolder?: String;
    /**
     * Encryption mode used to encrypt the assessment run results.
     */
    ResultEncryptionMode?: String;
    /**
     * ARN of the KMS encryption key used to encrypt the assessment run results.
     */
    ResultKmsKeyArn?: String;
    /**
     * Unique name of the assessment run.
     */
    AssessmentRunName?: String;
  }
  export type ReplicationTaskAssessmentRunList = ReplicationTaskAssessmentRun[];
  export interface ReplicationTaskAssessmentRunProgress {
    /**
     * The number of individual assessments that are specified to run.
     */
    IndividualAssessmentCount?: Integer;
    /**
     * The number of individual assessments that have completed, successfully or not.
     */
    IndividualAssessmentCompletedCount?: Integer;
  }
  export interface ReplicationTaskIndividualAssessment {
    /**
     * Amazon Resource Name (ARN) of this individual assessment.
     */
    ReplicationTaskIndividualAssessmentArn?: String;
    /**
     * ARN of the premigration assessment run that is created to run this individual assessment.
     */
    ReplicationTaskAssessmentRunArn?: String;
    /**
     * Name of this individual assessment.
     */
    IndividualAssessmentName?: String;
    /**
     * Individual assessment status. This status can have one of the following values:    "cancelled"     "error"     "failed"     "passed"     "pending"     "running"   
     */
    Status?: String;
    /**
     * Date when this individual assessment was started as part of running the StartReplicationTaskAssessmentRun operation.
     */
    ReplicationTaskIndividualAssessmentStartDate?: TStamp;
  }
  export type ReplicationTaskIndividualAssessmentList = ReplicationTaskIndividualAssessment[];
  export type ReplicationTaskList = ReplicationTask[];
  export interface ReplicationTaskStats {
    /**
     * The percent complete for the full load migration task.
     */
    FullLoadProgressPercent?: Integer;
    /**
     * The elapsed time of the task, in milliseconds.
     */
    ElapsedTimeMillis?: Long;
    /**
     * The number of tables loaded for this task.
     */
    TablesLoaded?: Integer;
    /**
     * The number of tables currently loading for this task.
     */
    TablesLoading?: Integer;
    /**
     * The number of tables queued for this task.
     */
    TablesQueued?: Integer;
    /**
     * The number of errors that have occurred during this task.
     */
    TablesErrored?: Integer;
    /**
     * The date the replication task was started either with a fresh start or a target reload.
     */
    FreshStartDate?: TStamp;
    /**
     * The date the replication task was started either with a fresh start or a resume. For more information, see StartReplicationTaskType.
     */
    StartDate?: TStamp;
    /**
     * The date the replication task was stopped.
     */
    StopDate?: TStamp;
    /**
     * The date the replication task full load was started.
     */
    FullLoadStartDate?: TStamp;
    /**
     * The date the replication task full load was completed.
     */
    FullLoadFinishDate?: TStamp;
  }
  export interface ResourcePendingMaintenanceActions {
    /**
     * The Amazon Resource Name (ARN) of the DMS resource that the pending maintenance action applies to. For information about creating an ARN, see  Constructing an Amazon Resource Name (ARN) for DMS in the DMS documentation.
     */
    ResourceIdentifier?: String;
    /**
     * Detailed information about the pending maintenance action.
     */
    PendingMaintenanceActionDetails?: PendingMaintenanceActionDetails;
  }
  export interface RunFleetAdvisorLsaAnalysisResponse {
    /**
     * The ID of the LSA analysis run.
     */
    LsaAnalysisId?: String;
    /**
     * The status of the LSA analysis, for example COMPLETED.
     */
    Status?: String;
  }
  export interface S3Settings {
    /**
     *  The Amazon Resource Name (ARN) used by the service to access the IAM role. The role must allow the iam:PassRole action. It is a required parameter that enables DMS to write and read objects from an S3 bucket.
     */
    ServiceAccessRoleArn?: String;
    /**
     *  Specifies how tables are defined in the S3 source files only. 
     */
    ExternalTableDefinition?: String;
    /**
     *  The delimiter used to separate rows in the .csv file for both source and target. The default is a carriage return (\n). 
     */
    CsvRowDelimiter?: String;
    /**
     *  The delimiter used to separate columns in the .csv file for both source and target. The default is a comma. 
     */
    CsvDelimiter?: String;
    /**
     *  An optional parameter to set a folder name in the S3 bucket. If provided, tables are created in the path  bucketFolder/schema_name/table_name/. If this parameter isn't specified, then the path used is  schema_name/table_name/. 
     */
    BucketFolder?: String;
    /**
     *  The name of the S3 bucket. 
     */
    BucketName?: String;
    /**
     * An optional parameter to use GZIP to compress the target files. Set to GZIP to compress the target files. Either set this parameter to NONE (the default) or don't use it to leave the files uncompressed. This parameter applies to both .csv and .parquet file formats. 
     */
    CompressionType?: CompressionTypeValue;
    /**
     * The type of server-side encryption that you want to use for your data. This encryption type is part of the endpoint settings or the extra connections attributes for Amazon S3. You can choose either SSE_S3 (the default) or SSE_KMS.   For the ModifyEndpoint operation, you can change the existing value of the EncryptionMode parameter from SSE_KMS to SSE_S3. But you can’t change the existing value from SSE_S3 to SSE_KMS.  To use SSE_S3, you need an Identity and Access Management (IAM) role with permission to allow "arn:aws:s3:::dms-*" to use the following actions:    s3:CreateBucket     s3:ListBucket     s3:DeleteBucket     s3:GetBucketLocation     s3:GetObject     s3:PutObject     s3:DeleteObject     s3:GetObjectVersion     s3:GetBucketPolicy     s3:PutBucketPolicy     s3:DeleteBucketPolicy   
     */
    EncryptionMode?: EncryptionModeValue;
    /**
     * If you are using SSE_KMS for the EncryptionMode, provide the KMS key ID. The key that you use needs an attached policy that enables Identity and Access Management (IAM) user permissions and allows use of the key. Here is a CLI example: aws dms create-endpoint --endpoint-identifier value --endpoint-type target --engine-name s3 --s3-settings ServiceAccessRoleArn=value,BucketFolder=value,BucketName=value,EncryptionMode=SSE_KMS,ServerSideEncryptionKmsKeyId=value  
     */
    ServerSideEncryptionKmsKeyId?: String;
    /**
     * The format of the data that you want to use for output. You can choose one of the following:     csv : This is a row-based file format with comma-separated values (.csv).     parquet : Apache Parquet (.parquet) is a columnar storage file format that features efficient compression and provides faster query response.   
     */
    DataFormat?: DataFormatValue;
    /**
     * The type of encoding you are using:     RLE_DICTIONARY uses a combination of bit-packing and run-length encoding to store repeated values more efficiently. This is the default.    PLAIN doesn't use encoding at all. Values are stored as they are.    PLAIN_DICTIONARY builds a dictionary of the values encountered in a given column. The dictionary is stored in a dictionary page for each column chunk.  
     */
    EncodingType?: EncodingTypeValue;
    /**
     * The maximum size of an encoded dictionary page of a column. If the dictionary page exceeds this, this column is stored using an encoding type of PLAIN. This parameter defaults to 1024 * 1024 bytes (1 MiB), the maximum size of a dictionary page before it reverts to PLAIN encoding. This size is used for .parquet file format only. 
     */
    DictPageSizeLimit?: IntegerOptional;
    /**
     * The number of rows in a row group. A smaller row group size provides faster reads. But as the number of row groups grows, the slower writes become. This parameter defaults to 10,000 rows. This number is used for .parquet file format only.  If you choose a value larger than the maximum, RowGroupLength is set to the max row group length in bytes (64 * 1024 * 1024). 
     */
    RowGroupLength?: IntegerOptional;
    /**
     * The size of one data page in bytes. This parameter defaults to 1024 * 1024 bytes (1 MiB). This number is used for .parquet file format only. 
     */
    DataPageSize?: IntegerOptional;
    /**
     * The version of the Apache Parquet format that you want to use: parquet_1_0 (the default) or parquet_2_0.
     */
    ParquetVersion?: ParquetVersionValue;
    /**
     * A value that enables statistics for Parquet pages and row groups. Choose true to enable statistics, false to disable. Statistics include NULL, DISTINCT, MAX, and MIN values. This parameter defaults to true. This value is used for .parquet file format only.
     */
    EnableStatistics?: BooleanOptional;
    /**
     * A value that enables a full load to write INSERT operations to the comma-separated value (.csv) or .parquet output files only to indicate how the rows were added to the source database.  DMS supports the IncludeOpForFullLoad parameter in versions 3.1.4 and later. DMS supports the use of the .parquet files with the IncludeOpForFullLoad parameter in versions 3.4.7 and later.  For full load, records can only be inserted. By default (the false setting), no information is recorded in these output files for a full load to indicate that the rows were inserted at the source database. If IncludeOpForFullLoad is set to true or y, the INSERT is recorded as an I annotation in the first field of the .csv file. This allows the format of your target records from a full load to be consistent with the target records from a CDC load.  This setting works together with the CdcInsertsOnly and the CdcInsertsAndUpdates parameters for output to .csv files only. For more information about how these settings work together, see Indicating Source DB Operations in Migrated S3 Data in the Database Migration Service User Guide.. 
     */
    IncludeOpForFullLoad?: BooleanOptional;
    /**
     * A value that enables a change data capture (CDC) load to write only INSERT operations to .csv or columnar storage (.parquet) output files. By default (the false setting), the first field in a .csv or .parquet record contains the letter I (INSERT), U (UPDATE), or D (DELETE). These values indicate whether the row was inserted, updated, or deleted at the source database for a CDC load to the target. If CdcInsertsOnly is set to true or y, only INSERTs from the source database are migrated to the .csv or .parquet file. For .csv format only, how these INSERTs are recorded depends on the value of IncludeOpForFullLoad. If IncludeOpForFullLoad is set to true, the first field of every CDC record is set to I to indicate the INSERT operation at the source. If IncludeOpForFullLoad is set to false, every CDC record is written without a first field to indicate the INSERT operation at the source. For more information about how these settings work together, see Indicating Source DB Operations in Migrated S3 Data in the Database Migration Service User Guide..  DMS supports the interaction described preceding between the CdcInsertsOnly and IncludeOpForFullLoad parameters in versions 3.1.4 and later.   CdcInsertsOnly and CdcInsertsAndUpdates can't both be set to true for the same endpoint. Set either CdcInsertsOnly or CdcInsertsAndUpdates to true for the same endpoint, but not both. 
     */
    CdcInsertsOnly?: BooleanOptional;
    /**
     * A value that when nonblank causes DMS to add a column with timestamp information to the endpoint data for an Amazon S3 target.  DMS supports the TimestampColumnName parameter in versions 3.1.4 and later.  DMS includes an additional STRING column in the .csv or .parquet object files of your migrated data when you set TimestampColumnName to a nonblank value. For a full load, each row of this timestamp column contains a timestamp for when the data was transferred from the source to the target by DMS.  For a change data capture (CDC) load, each row of the timestamp column contains the timestamp for the commit of that row in the source database. The string format for this timestamp column value is yyyy-MM-dd HH:mm:ss.SSSSSS. By default, the precision of this value is in microseconds. For a CDC load, the rounding of the precision depends on the commit timestamp supported by DMS for the source database. When the AddColumnName parameter is set to true, DMS also includes a name for the timestamp column that you set with TimestampColumnName.
     */
    TimestampColumnName?: String;
    /**
     * A value that specifies the precision of any TIMESTAMP column values that are written to an Amazon S3 object file in .parquet format.  DMS supports the ParquetTimestampInMillisecond parameter in versions 3.1.4 and later.  When ParquetTimestampInMillisecond is set to true or y, DMS writes all TIMESTAMP columns in a .parquet formatted file with millisecond precision. Otherwise, DMS writes them with microsecond precision. Currently, Amazon Athena and Glue can handle only millisecond precision for TIMESTAMP values. Set this parameter to true for S3 endpoint object files that are .parquet formatted only if you plan to query or process the data with Athena or Glue.  DMS writes any TIMESTAMP column values written to an S3 file in .csv format with microsecond precision. Setting ParquetTimestampInMillisecond has no effect on the string format of the timestamp column value that is inserted by setting the TimestampColumnName parameter. 
     */
    ParquetTimestampInMillisecond?: BooleanOptional;
    /**
     * A value that enables a change data capture (CDC) load to write INSERT and UPDATE operations to .csv or .parquet (columnar storage) output files. The default setting is false, but when CdcInsertsAndUpdates is set to true or y, only INSERTs and UPDATEs from the source database are migrated to the .csv or .parquet file.  DMS supports the use of the .parquet files in versions 3.4.7 and later.  How these INSERTs and UPDATEs are recorded depends on the value of the IncludeOpForFullLoad parameter. If IncludeOpForFullLoad is set to true, the first field of every CDC record is set to either I or U to indicate INSERT and UPDATE operations at the source. But if IncludeOpForFullLoad is set to false, CDC records are written without an indication of INSERT or UPDATE operations at the source. For more information about how these settings work together, see Indicating Source DB Operations in Migrated S3 Data in the Database Migration Service User Guide..  DMS supports the use of the CdcInsertsAndUpdates parameter in versions 3.3.1 and later.  CdcInsertsOnly and CdcInsertsAndUpdates can't both be set to true for the same endpoint. Set either CdcInsertsOnly or CdcInsertsAndUpdates to true for the same endpoint, but not both. 
     */
    CdcInsertsAndUpdates?: BooleanOptional;
    /**
     * When set to true, this parameter partitions S3 bucket folders based on transaction commit dates. The default value is false. For more information about date-based folder partitioning, see Using date-based folder partitioning.
     */
    DatePartitionEnabled?: BooleanOptional;
    /**
     * Identifies the sequence of the date format to use during folder partitioning. The default value is YYYYMMDD. Use this parameter when DatePartitionedEnabled is set to true.
     */
    DatePartitionSequence?: DatePartitionSequenceValue;
    /**
     * Specifies a date separating delimiter to use during folder partitioning. The default value is SLASH. Use this parameter when DatePartitionedEnabled is set to true.
     */
    DatePartitionDelimiter?: DatePartitionDelimiterValue;
    /**
     * This setting applies if the S3 output files during a change data capture (CDC) load are written in .csv format. If set to true for columns not included in the supplemental log, DMS uses the value specified by  CsvNoSupValue . If not set or set to false, DMS uses the null value for these columns.  This setting is supported in DMS versions 3.4.1 and later. 
     */
    UseCsvNoSupValue?: BooleanOptional;
    /**
     * This setting only applies if your Amazon S3 output files during a change data capture (CDC) load are written in .csv format. If  UseCsvNoSupValue  is set to true, specify a string value that you want DMS to use for all columns not included in the supplemental log. If you do not specify a string value, DMS uses the null value for these columns regardless of the UseCsvNoSupValue setting.  This setting is supported in DMS versions 3.4.1 and later. 
     */
    CsvNoSupValue?: String;
    /**
     * If set to true, DMS saves the transaction order for a change data capture (CDC) load on the Amazon S3 target specified by  CdcPath . For more information, see Capturing data changes (CDC) including transaction order on the S3 target.  This setting is supported in DMS versions 3.4.2 and later. 
     */
    PreserveTransactions?: BooleanOptional;
    /**
     * Specifies the folder path of CDC files. For an S3 source, this setting is required if a task captures change data; otherwise, it's optional. If CdcPath is set, DMS reads CDC files from this path and replicates the data changes to the target endpoint. For an S3 target if you set  PreserveTransactions  to true, DMS verifies that you have set this parameter to a folder path on your S3 target where DMS can save the transaction order for the CDC load. DMS creates this CDC folder path in either your S3 target working directory or the S3 target location specified by  BucketFolder  and  BucketName . For example, if you specify CdcPath as MyChangedData, and you specify BucketName as MyTargetBucket but do not specify BucketFolder, DMS creates the CDC folder path following: MyTargetBucket/MyChangedData. If you specify the same CdcPath, and you specify BucketName as MyTargetBucket and BucketFolder as MyTargetData, DMS creates the CDC folder path following: MyTargetBucket/MyTargetData/MyChangedData. For more information on CDC including transaction order on an S3 target, see Capturing data changes (CDC) including transaction order on the S3 target.  This setting is supported in DMS versions 3.4.2 and later. 
     */
    CdcPath?: String;
    /**
     * When set to true, this parameter uses the task start time as the timestamp column value instead of the time data is written to target. For full load, when useTaskStartTimeForFullLoadTimestamp is set to true, each row of the timestamp column contains the task start time. For CDC loads, each row of the timestamp column contains the transaction commit time. When useTaskStartTimeForFullLoadTimestamp is set to false, the full load timestamp in the timestamp column increments with the time data arrives at the target. 
     */
    UseTaskStartTimeForFullLoadTimestamp?: BooleanOptional;
    /**
     * A value that enables DMS to specify a predefined (canned) access control list for objects created in an Amazon S3 bucket as .csv or .parquet files. For more information about Amazon S3 canned ACLs, see Canned ACL in the Amazon S3 Developer Guide.  The default value is NONE. Valid values include NONE, PRIVATE, PUBLIC_READ, PUBLIC_READ_WRITE, AUTHENTICATED_READ, AWS_EXEC_READ, BUCKET_OWNER_READ, and BUCKET_OWNER_FULL_CONTROL.
     */
    CannedAclForObjects?: CannedAclForObjectsValue;
    /**
     * An optional parameter that, when set to true or y, you can use to add column name information to the .csv output file. The default value is false. Valid values are true, false, y, and n.
     */
    AddColumnName?: BooleanOptional;
    /**
     * Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3. When CdcMaxBatchInterval and CdcMinFileSize are both specified, the file write is triggered by whichever parameter condition is met first within an DMS CloudFormation template. The default value is 60 seconds.
     */
    CdcMaxBatchInterval?: IntegerOptional;
    /**
     * Minimum file size, defined in kilobytes, to reach for a file output to Amazon S3. When CdcMinFileSize and CdcMaxBatchInterval are both specified, the file write is triggered by whichever parameter condition is met first within an DMS CloudFormation template. The default value is 32 MB.
     */
    CdcMinFileSize?: IntegerOptional;
    /**
     * An optional parameter that specifies how DMS treats null values. While handling the null value, you can use this parameter to pass a user-defined string as null when writing to the target. For example, when target columns are nullable, you can use this option to differentiate between the empty string value and the null value. So, if you set this parameter value to the empty string ("" or ''), DMS treats the empty string as the null value instead of NULL. The default value is NULL. Valid values include any valid string.
     */
    CsvNullValue?: String;
    /**
     * When this value is set to 1, DMS ignores the first row header in a .csv file. A value of 1 turns on the feature; a value of 0 turns off the feature. The default is 0.
     */
    IgnoreHeaderRows?: IntegerOptional;
    /**
     * A value that specifies the maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load. The default value is 1,048,576 KB (1 GB). Valid values include 1 to 1,048,576.
     */
    MaxFileSize?: IntegerOptional;
    /**
     * For an S3 source, when this value is set to true or y, each leading double quotation mark has to be followed by an ending double quotation mark. This formatting complies with RFC 4180. When this value is set to false or n, string literals are copied to the target as is. In this case, a delimiter (row or column) signals the end of the field. Thus, you can't use a delimiter as part of the string, because it signals the end of the value. For an S3 target, an optional parameter used to set behavior to comply with RFC 4180 for data migrated to Amazon S3 using .csv file format only. When this value is set to true or y using Amazon S3 as a target, if the data has quotation marks or newline characters in it, DMS encloses the entire column with an additional pair of double quotation marks ("). Every quotation mark within the data is repeated twice. The default value is true. Valid values include true, false, y, and n.
     */
    Rfc4180?: BooleanOptional;
    /**
     * When creating an S3 target endpoint, set DatePartitionTimezone to convert the current UTC time into a specified time zone. The conversion occurs when a date partition folder is created and a CDC filename is generated. The time zone format is Area/Location. Use this parameter when DatePartitionedEnabled is set to true, as shown in the following example.  s3-settings='{"DatePartitionEnabled": true, "DatePartitionSequence": "YYYYMMDDHH", "DatePartitionDelimiter": "SLASH", "DatePartitionTimezone":"Asia/Seoul", "BucketName": "dms-nattarat-test"}' 
     */
    DatePartitionTimezone?: String;
    /**
     * Use the S3 target endpoint setting AddTrailingPaddingCharacter to add padding on string data. The default value is false.
     */
    AddTrailingPaddingCharacter?: BooleanOptional;
    /**
     * To specify a bucket owner and prevent sniping, you can use the ExpectedBucketOwner endpoint setting.  Example: --s3-settings='{"ExpectedBucketOwner": "AWS_Account_ID"}'  When you make a request to test a connection or perform a migration, S3 checks the account ID of the bucket owner against the specified parameter.
     */
    ExpectedBucketOwner?: String;
    /**
     * When true, allows Glue to catalog your S3 bucket. Creating an Glue catalog lets you use Athena to query your data.
     */
    GlueCatalogGeneration?: BooleanOptional;
  }
  export interface SCApplicationAttributes {
    /**
     * The path for the Amazon S3 bucket that the application uses for exporting assessment reports.
     */
    S3BucketPath?: String;
    /**
     * The ARN for the role the application uses to access its Amazon S3 bucket.
     */
    S3BucketRoleArn?: String;
  }
  export type SafeguardPolicy = "rely-on-sql-server-replication-agent"|"exclusive-automatic-truncation"|"shared-automatic-truncation"|string;
  export interface SchemaConversionRequest {
    /**
     * The schema conversion action status.
     */
    Status?: String;
    /**
     * The identifier for the schema conversion action.
     */
    RequestIdentifier?: String;
    /**
     * The migration project ARN.
     */
    MigrationProjectArn?: String;
    Error?: ErrorDetails;
    ExportSqlDetails?: ExportSqlDetails;
  }
  export type SchemaConversionRequestList = SchemaConversionRequest[];
  export type SchemaList = String[];
  export interface SchemaResponse {
    /**
     * The number of lines of code in a schema in a Fleet Advisor collector inventory.
     */
    CodeLineCount?: LongOptional;
    /**
     * The size level of the code in a schema in a Fleet Advisor collector inventory.
     */
    CodeSize?: LongOptional;
    /**
     * The complexity level of the code in a schema in a Fleet Advisor collector inventory.
     */
    Complexity?: String;
    /**
     * The database server for a schema in a Fleet Advisor collector inventory.
     */
    Server?: ServerShortInfoResponse;
    /**
     * The database for a schema in a Fleet Advisor collector inventory.
     */
    DatabaseInstance?: DatabaseShortInfoResponse;
    /**
     * The ID of a schema in a Fleet Advisor collector inventory.
     */
    SchemaId?: String;
    /**
     * The name of a schema in a Fleet Advisor collector inventory.
     */
    SchemaName?: String;
    OriginalSchema?: SchemaShortInfoResponse;
    /**
     * The similarity value for a schema in a Fleet Advisor collector inventory. A higher similarity value indicates that a schema is likely to be a duplicate.
     */
    Similarity?: DoubleOptional;
  }
  export interface SchemaShortInfoResponse {
    /**
     * The ID of a schema in a Fleet Advisor collector inventory.
     */
    SchemaId?: String;
    /**
     * The name of a schema in a Fleet Advisor collector inventory.
     */
    SchemaName?: String;
    /**
     * The ID of a database in a Fleet Advisor collector inventory.
     */
    DatabaseId?: String;
    /**
     * The name of a database in a Fleet Advisor collector inventory.
     */
    DatabaseName?: String;
    /**
     * The IP address of a database in a Fleet Advisor collector inventory.
     */
    DatabaseIpAddress?: String;
  }
  export type SecretString = string;
  export interface ServerShortInfoResponse {
    /**
     * The ID of a server in a Fleet Advisor collector inventory.
     */
    ServerId?: String;
    /**
     * The IP address of a server in a Fleet Advisor collector inventory.
     */
    IpAddress?: String;
    /**
     * The name address of a server in a Fleet Advisor collector inventory.
     */
    ServerName?: String;
  }
  export type SourceIdsList = String[];
  export type SourceType = "replication-instance"|string;
  export type SslSecurityProtocolValue = "plaintext"|"ssl-encryption"|string;
  export interface StartExtensionPackAssociationMessage {
    /**
     * The migration project name or Amazon Resource Name (ARN).
     */
    MigrationProjectIdentifier: String;
  }
  export interface StartExtensionPackAssociationResponse {
    /**
     * The identifier for the request operation.
     */
    RequestIdentifier?: String;
  }
  export interface StartMetadataModelAssessmentMessage {
    /**
     * The migration project name or Amazon Resource Name (ARN).
     */
    MigrationProjectIdentifier: String;
    /**
     * A value that specifies the database objects to assess.
     */
    SelectionRules: String;
  }
  export interface StartMetadataModelAssessmentResponse {
    /**
     * The identifier for the assessment operation.
     */
    RequestIdentifier?: String;
  }
  export interface StartMetadataModelConversionMessage {
    /**
     * The migration project name or Amazon Resource Name (ARN).
     */
    MigrationProjectIdentifier: String;
    /**
     * A value that specifies the database objects to convert.
     */
    SelectionRules: String;
  }
  export interface StartMetadataModelConversionResponse {
    /**
     * The identifier for the conversion operation.
     */
    RequestIdentifier?: String;
  }
  export interface StartMetadataModelExportAsScriptMessage {
    /**
     * The migration project name or Amazon Resource Name (ARN).
     */
    MigrationProjectIdentifier: String;
    /**
     * A value that specifies the database objects to export.
     */
    SelectionRules: String;
    /**
     * Whether to export the metadata model from the source or the target.
     */
    Origin: OriginTypeValue;
    /**
     * The name of the model file to create in the Amazon S3 bucket.
     */
    FileName?: String;
  }
  export interface StartMetadataModelExportAsScriptResponse {
    /**
     * The identifier for the export operation.
     */
    RequestIdentifier?: String;
  }
  export interface StartMetadataModelExportToTargetMessage {
    /**
     * The migration project name or Amazon Resource Name (ARN).
     */
    MigrationProjectIdentifier: String;
    /**
     * A value that specifies the database objects to export.
     */
    SelectionRules: String;
    /**
     * Whether to overwrite the migration project extension pack. An extension pack is an add-on module that emulates functions present in a source database that are required when converting objects to the target database.
     */
    OverwriteExtensionPack?: BooleanOptional;
  }
  export interface StartMetadataModelExportToTargetResponse {
    /**
     * The identifier for the export operation.
     */
    RequestIdentifier?: String;
  }
  export interface StartMetadataModelImportMessage {
    /**
     * The migration project name or Amazon Resource Name (ARN).
     */
    MigrationProjectIdentifier: String;
    /**
     * A value that specifies the database objects to import.
     */
    SelectionRules: String;
    /**
     * Whether to load metadata to the source or target database.
     */
    Origin: OriginTypeValue;
    /**
     * If true, DMS loads metadata for the specified objects from the source database.
     */
    Refresh?: Boolean;
  }
  export interface StartMetadataModelImportResponse {
    /**
     * The identifier for the import operation.
     */
    RequestIdentifier?: String;
  }
  export interface StartRecommendationsRequest {
    /**
     * The identifier of the source database to analyze and provide recommendations for.
     */
    DatabaseId: String;
    /**
     * The settings in JSON format that Fleet Advisor uses to determine target engine recommendations. These parameters include target instance sizing and availability and durability settings. For target instance sizing, Fleet Advisor supports the following two options: total capacity and resource utilization. For availability and durability, Fleet Advisor supports the following two options: production (Multi-AZ deployments) and Dev/Test (Single-AZ deployments).
     */
    Settings: RecommendationSettings;
  }
  export interface StartRecommendationsRequestEntry {
    /**
     * The identifier of the source database.
     */
    DatabaseId: String;
    /**
     * The required target engine settings.
     */
    Settings: RecommendationSettings;
  }
  export type StartRecommendationsRequestEntryList = StartRecommendationsRequestEntry[];
  export interface StartReplicationMessage {
    /**
     * The Amazon Resource Name of the replication for which to start replication.
     */
    ReplicationConfigArn: String;
    /**
     * The replication type.
     */
    StartReplicationType: String;
    /**
     * Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error.
     */
    CdcStartTime?: TStamp;
    /**
     * Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error. The value can be in date, checkpoint, or LSN/SCN format.
     */
    CdcStartPosition?: String;
    /**
     * Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time.
     */
    CdcStopPosition?: String;
  }
  export interface StartReplicationResponse {
    /**
     * The replication that DMS started.
     */
    Replication?: Replication;
  }
  export interface StartReplicationTaskAssessmentMessage {
    /**
     *  The Amazon Resource Name (ARN) of the replication task. 
     */
    ReplicationTaskArn: String;
  }
  export interface StartReplicationTaskAssessmentResponse {
    /**
     *  The assessed replication task. 
     */
    ReplicationTask?: ReplicationTask;
  }
  export interface StartReplicationTaskAssessmentRunMessage {
    /**
     * Amazon Resource Name (ARN) of the migration task associated with the premigration assessment run that you want to start.
     */
    ReplicationTaskArn: String;
    /**
     * ARN of the service role needed to start the assessment run. The role must allow the iam:PassRole action.
     */
    ServiceAccessRoleArn: String;
    /**
     * Amazon S3 bucket where you want DMS to store the results of this assessment run.
     */
    ResultLocationBucket: String;
    /**
     * Folder within an Amazon S3 bucket where you want DMS to store the results of this assessment run.
     */
    ResultLocationFolder?: String;
    /**
     * Encryption mode that you can specify to encrypt the results of this assessment run. If you don't specify this request parameter, DMS stores the assessment run results without encryption. You can specify one of the options following:    "SSE_S3" – The server-side encryption provided as a default by Amazon S3.    "SSE_KMS" – Key Management Service (KMS) encryption. This encryption can use either a custom KMS encryption key that you specify or the default KMS encryption key that DMS provides.  
     */
    ResultEncryptionMode?: String;
    /**
     * ARN of a custom KMS encryption key that you specify when you set ResultEncryptionMode to "SSE_KMS".
     */
    ResultKmsKeyArn?: String;
    /**
     * Unique name to identify the assessment run.
     */
    AssessmentRunName: String;
    /**
     * Space-separated list of names for specific individual assessments that you want to include. These names come from the default list of individual assessments that DMS supports for the associated migration task. This task is specified by ReplicationTaskArn.  You can't set a value for IncludeOnly if you also set a value for Exclude in the API operation.  To identify the names of the default individual assessments that DMS supports for the associated migration task, run the DescribeApplicableIndividualAssessments operation using its own ReplicationTaskArn request parameter. 
     */
    IncludeOnly?: IncludeTestList;
    /**
     * Space-separated list of names for specific individual assessments that you want to exclude. These names come from the default list of individual assessments that DMS supports for the associated migration task. This task is specified by ReplicationTaskArn.  You can't set a value for Exclude if you also set a value for IncludeOnly in the API operation. To identify the names of the default individual assessments that DMS supports for the associated migration task, run the DescribeApplicableIndividualAssessments operation using its own ReplicationTaskArn request parameter. 
     */
    Exclude?: ExcludeTestList;
  }
  export interface StartReplicationTaskAssessmentRunResponse {
    /**
     * The premigration assessment run that was started.
     */
    ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;
  }
  export interface StartReplicationTaskMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication task to be started.
     */
    ReplicationTaskArn: String;
    /**
     * The type of replication task to start. When the migration type is full-load or full-load-and-cdc, the only valid value for the first run of the task is start-replication. This option will start the migration. You can also use ReloadTables to reload specific tables that failed during migration instead of restarting the task. The resume-processing option isn't applicable for a full-load task, because you can't resume partially loaded tables during the full load phase. For a full-load-and-cdc task, DMS migrates table data, and then applies data changes that occur on the source. To load all the tables again, and start capturing source changes, use reload-target. Otherwise use resume-processing, to replicate the changes from the last stop position.
     */
    StartReplicationTaskType: StartReplicationTaskTypeValue;
    /**
     * Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error. Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”
     */
    CdcStartTime?: TStamp;
    /**
     * Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.  The value can be in date, checkpoint, or LSN/SCN format. Date Example: --cdc-start-position “2018-03-08T12:12:12” Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93" LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”  When you use this task setting with a source PostgreSQL database, a logical replication slot should already be created and associated with the source endpoint. You can verify this by setting the slotName extra connection attribute to the name of this logical replication slot. For more information, see Extra Connection Attributes When Using PostgreSQL as a Source for DMS. 
     */
    CdcStartPosition?: String;
    /**
     * Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time. Server time example: --cdc-stop-position “server_time:2018-02-09T12:12:12” Commit time example: --cdc-stop-position “commit_time:2018-02-09T12:12:12“
     */
    CdcStopPosition?: String;
  }
  export interface StartReplicationTaskResponse {
    /**
     * The replication task started.
     */
    ReplicationTask?: ReplicationTask;
  }
  export type StartReplicationTaskTypeValue = "start-replication"|"resume-processing"|"reload-target"|string;
  export interface StopReplicationMessage {
    /**
     * The Amazon Resource Name of the replication to stop.
     */
    ReplicationConfigArn: String;
  }
  export interface StopReplicationResponse {
    /**
     * The replication that DMS stopped.
     */
    Replication?: Replication;
  }
  export interface StopReplicationTaskMessage {
    /**
     * The Amazon Resource Name(ARN) of the replication task to be stopped.
     */
    ReplicationTaskArn: String;
  }
  export interface StopReplicationTaskResponse {
    /**
     * The replication task stopped.
     */
    ReplicationTask?: ReplicationTask;
  }
  export type String = string;
  export type StringList = String[];
  export interface Subnet {
    /**
     * The subnet identifier.
     */
    SubnetIdentifier?: String;
    /**
     * The Availability Zone of the subnet.
     */
    SubnetAvailabilityZone?: AvailabilityZone;
    /**
     * The status of the subnet.
     */
    SubnetStatus?: String;
  }
  export type SubnetIdentifierList = String[];
  export type SubnetList = Subnet[];
  export interface SupportedEndpointType {
    /**
     * The database engine name. Valid values, depending on the EndpointType, include "mysql", "oracle", "postgres", "mariadb", "aurora", "aurora-postgresql", "redshift", "s3", "db2", "db2-zos", "azuredb", "sybase", "dynamodb", "mongodb", "kinesis", "kafka", "elasticsearch", "documentdb", "sqlserver", "neptune", and "babelfish".
     */
    EngineName?: String;
    /**
     * Indicates if change data capture (CDC) is supported.
     */
    SupportsCDC?: Boolean;
    /**
     * The type of endpoint. Valid values are source and target.
     */
    EndpointType?: ReplicationEndpointTypeValue;
    /**
     * The earliest DMS engine version that supports this endpoint engine. Note that endpoint engines released with DMS versions earlier than 3.1.1 do not return a value for this parameter.
     */
    ReplicationInstanceEngineMinimumVersion?: String;
    /**
     * The expanded name for the engine name. For example, if the EngineName parameter is "aurora", this value would be "Amazon Aurora MySQL".
     */
    EngineDisplayName?: String;
  }
  export type SupportedEndpointTypeList = SupportedEndpointType[];
  export interface SybaseSettings {
    /**
     * Database name for the endpoint.
     */
    DatabaseName?: String;
    /**
     * Endpoint connection password.
     */
    Password?: SecretString;
    /**
     * Endpoint TCP port. The default is 5000.
     */
    Port?: IntegerOptional;
    /**
     * Fully qualified domain name of the endpoint.
     */
    ServerName?: String;
    /**
     * Endpoint connection user name.
     */
    Username?: String;
    /**
     * The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the Amazon Web Services Secrets Manager secret that allows access to the SAP ASE endpoint.  You can specify one of two sets of values for these permissions. You can specify the values for this setting and SecretsManagerSecretId. Or you can specify clear-text values for UserName, Password, ServerName, and Port. You can't specify both. For more information on creating this SecretsManagerSecret and the SecretsManagerAccessRoleArn and SecretsManagerSecretId required to access it, see Using secrets to access Database Migration Service resources in the Database Migration Service User Guide. 
     */
    SecretsManagerAccessRoleArn?: String;
    /**
     * The full ARN, partial ARN, or friendly name of the SecretsManagerSecret that contains the SAP SAE endpoint connection details.
     */
    SecretsManagerSecretId?: String;
  }
  export type TStamp = Date;
  export type TableListToReload = TableToReload[];
  export interface TableStatistics {
    /**
     * The schema name.
     */
    SchemaName?: String;
    /**
     * The name of the table.
     */
    TableName?: String;
    /**
     * The number of insert actions performed on a table.
     */
    Inserts?: Long;
    /**
     * The number of delete actions performed on a table.
     */
    Deletes?: Long;
    /**
     * The number of update actions performed on a table.
     */
    Updates?: Long;
    /**
     * The data definition language (DDL) used to build and modify the structure of your tables.
     */
    Ddls?: Long;
    /**
     * The number of insert actions applied on a target table.
     */
    AppliedInserts?: LongOptional;
    /**
     * The number of delete actions applied on a target table.
     */
    AppliedDeletes?: LongOptional;
    /**
     * The number of update actions applied on a target table.
     */
    AppliedUpdates?: LongOptional;
    /**
     * The number of data definition language (DDL) statements used to build and modify the structure of your tables applied on the target.
     */
    AppliedDdls?: LongOptional;
    /**
     * The number of rows added during the full load operation.
     */
    FullLoadRows?: Long;
    /**
     * The number of rows that failed conditional checks during the full load operation (valid only for migrations where DynamoDB is the target).
     */
    FullLoadCondtnlChkFailedRows?: Long;
    /**
     * The number of rows that failed to load during the full load operation (valid only for migrations where DynamoDB is the target).
     */
    FullLoadErrorRows?: Long;
    /**
     * The time when the full load operation started.
     */
    FullLoadStartTime?: TStamp;
    /**
     * The time when the full load operation completed.
     */
    FullLoadEndTime?: TStamp;
    /**
     * A value that indicates if the table was reloaded (true) or loaded as part of a new full load operation (false).
     */
    FullLoadReloaded?: BooleanOptional;
    /**
     * The last time a table was updated.
     */
    LastUpdateTime?: TStamp;
    /**
     * The state of the tables described. Valid states: Table does not exist | Before load | Full load | Table completed | Table cancelled | Table error | Table is being reloaded
     */
    TableState?: String;
    /**
     * The number of records that have yet to be validated.
     */
    ValidationPendingRecords?: Long;
    /**
     * The number of records that failed validation.
     */
    ValidationFailedRecords?: Long;
    /**
     * The number of records that couldn't be validated.
     */
    ValidationSuspendedRecords?: Long;
    /**
     * The validation state of the table. This parameter can have the following values:   Not enabled – Validation isn't enabled for the table in the migration task.   Pending records – Some records in the table are waiting for validation.   Mismatched records – Some records in the table don't match between the source and target.   Suspended records – Some records in the table couldn't be validated.   No primary key –The table couldn't be validated because it has no primary key.   Table error – The table wasn't validated because it's in an error state and some data wasn't migrated.   Validated – All rows in the table are validated. If the table is updated, the status can change from Validated.   Error – The table couldn't be validated because of an unexpected error.   Pending validation – The table is waiting validation.   Preparing table – Preparing the table enabled in the migration task for validation.   Pending revalidation – All rows in the table are pending validation after the table was updated.  
     */
    ValidationState?: String;
    /**
     * Additional details about the state of validation.
     */
    ValidationStateDetails?: String;
  }
  export type TableStatisticsList = TableStatistics[];
  export interface TableToReload {
    /**
     * The schema name of the table to be reloaded.
     */
    SchemaName: String;
    /**
     * The table name of the table to be reloaded.
     */
    TableName: String;
  }
  export interface Tag {
    /**
     * A key is the required name of the tag. The string value can be 1-128 Unicode characters in length and can't be prefixed with "aws:" or "dms:". The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regular expressions: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").
     */
    Key?: String;
    /**
     * A value is the optional value of the tag. The string value can be 1-256 Unicode characters in length and can't be prefixed with "aws:" or "dms:". The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regular expressions: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").
     */
    Value?: String;
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the resource for which the tag is created.
     */
    ResourceArn?: String;
  }
  export type TagList = Tag[];
  export type TargetDbType = "specific-database"|"multiple-databases"|string;
  export interface TestConnectionMessage {
    /**
     * The Amazon Resource Name (ARN) of the replication instance.
     */
    ReplicationInstanceArn: String;
    /**
     * The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.
     */
    EndpointArn: String;
  }
  export interface TestConnectionResponse {
    /**
     * The connection tested.
     */
    Connection?: Connection;
  }
  export interface TimestreamSettings {
    /**
     * Database name for the endpoint.
     */
    DatabaseName: String;
    /**
     * Set this attribute to specify the length of time to store all of the tables in memory that are migrated into Amazon Timestream from the source database. Time is measured in units of hours. When Timestream data comes in, it first resides in memory for the specified duration, which allows quick access to it.
     */
    MemoryDuration: IntegerOptional;
    /**
     * Set this attribute to specify the default magnetic duration applied to the Amazon Timestream tables in days. This is the number of days that records remain in magnetic store before being discarded. For more information, see Storage in the Amazon Timestream Developer Guide.
     */
    MagneticDuration: IntegerOptional;
    /**
     * Set this attribute to true to specify that DMS only applies inserts and updates, and not deletes. Amazon Timestream does not allow deleting records, so if this value is false, DMS nulls out the corresponding record in the Timestream database rather than deleting it.
     */
    CdcInsertsAndUpdates?: BooleanOptional;
    /**
     * Set this attribute to true to enable memory store writes. When this value is false, DMS does not write records that are older in days than the value specified in MagneticDuration, because Amazon Timestream does not allow memory writes by default. For more information, see Storage in the Amazon Timestream Developer Guide.
     */
    EnableMagneticStoreWrites?: BooleanOptional;
  }
  export type TlogAccessMode = "BackupOnly"|"PreferBackup"|"PreferTlog"|"TlogOnly"|string;
  export interface UpdateSubscriptionsToEventBridgeMessage {
    /**
     * When set to true, this operation migrates DMS subscriptions for Amazon SNS notifications no matter what your replication instance version is. If not set or set to false, this operation runs only when all your replication instances are from DMS version 3.4.5 or higher. 
     */
    ForceMove?: BooleanOptional;
  }
  export interface UpdateSubscriptionsToEventBridgeResponse {
    /**
     * A string that indicates how many event subscriptions were migrated and how many remain to be migrated.
     */
    Result?: String;
  }
  export type VersionStatus = "UP_TO_DATE"|"OUTDATED"|"UNSUPPORTED"|string;
  export type VpcSecurityGroupIdList = String[];
  export interface VpcSecurityGroupMembership {
    /**
     * The VPC security group ID.
     */
    VpcSecurityGroupId?: String;
    /**
     * The status of the VPC security group.
     */
    Status?: String;
  }
  export type VpcSecurityGroupMembershipList = VpcSecurityGroupMembership[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-01-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the DMS client.
   */
  export import Types = DMS;
}
export = DMS;

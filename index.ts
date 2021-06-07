import {
    GetResponseTypeFromEndpointMethod,
    GetResponseDataTypeFromEndpointMethod,
  } from "@octokit/types";
  import { Octokit } from "@octokit/rest";
  
  const octokit = new Octokit();
  type CreateLabelResponseType = GetResponseTypeFromEndpointMethod<
    typeof octokit.issues.createLabel
  >;
  
  type RequestReviewersResponseType = GetResponseTypeFromEndpointMethod<
    typeof octokit.pulls.requestReviewers
  >;

  octokit.pulls.requestReviewers({})

  type CreateLabelResponseDataType = GetResponseDataTypeFromEndpointMethod<
    typeof octokit.issues.createLabel
  >;

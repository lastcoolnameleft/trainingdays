(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{579:function(e,t,a){e.exports=a.p+"assets/img/401-swagger-contacts.26cd5589.png"},580:function(e,t,a){e.exports=a.p+"assets/img/tokenechoserver-redirecturl.5aa26122.png"},581:function(e,t,a){e.exports=a.p+"assets/img/permission-request.63f0cb0a.png"},582:function(e,t,a){e.exports=a.p+"assets/img/swagger-authorize.598672ae.png"},641:function(e,t,a){"use strict";a.r(t);var s=a(42),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"integrate-azure-ad-into-the-scm-contacts-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integrate-azure-ad-into-the-scm-contacts-api"}},[e._v("#")]),e._v(" Integrate Azure AD into the SCM Contacts API")]),e._v(" "),s("h2",{attrs:{id:"here-is-what-you-will-learn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn"}},[e._v("#")]),e._v(" Here is what you will learn")]),e._v(" "),s("ul",[s("li",[e._v("Create Azure AD's client and server applications to integrate Azure AD into the SCM Contacts API")]),e._v(" "),s("li",[e._v("Configure and deploy the SCM Contacts API to Azure with Azure AD integration")])]),e._v(" "),s("p",[e._v("In the previous challenges you have learned some basics about the OpenID Connect and OAuth2 flows. You have seen how you can sign in users and how to acquire an access token for an Azure AD's protected resource. In this challenge we will integrate Azure AD into the SCM Contacts API step by step. Of course we will use Azure Pipelines to build and deploy the SCM Contacts API to Azure.")]),e._v(" "),s("h2",{attrs:{id:"create-the-azure-ad-client-and-server-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-the-azure-ad-client-and-server-application"}},[e._v("#")]),e._v(" Create the Azure AD client and server application")]),e._v(" "),s("p",[e._v("In "),s("RouterLink",{attrs:{to:"/day5/challenges/challenge-2.html"}},[e._v("challenge-2")]),e._v(" you have already seen how to create an Azure AD client application to sign in users and how to create an API application that exposes OAuth2 permissions. We have to do the same for the sample application.")],1),e._v(" "),s("p",[e._v("There are already scripts available in the repository to create both applications for you. If you want to use a Shell script you can use the script "),s("a",{attrs:{href:"../apps/infrastructure/scripts/aad-integration.sh"}},[e._v("day5/apps/infrastructure/aad-integration.sh")]),e._v(". If you want to use Powershell you can use the Script "),s("a",{attrs:{href:"../apps/infrastructure/scripts/aad-integration.ps1"}},[e._v("day5/apps/infrastructure/aad-integration.ps1")]),e._v(".")]),e._v(" "),s("p",[e._v("Each script creates the server application first and then the client application for the sample application. The scripts use a "),s("a",{attrs:{href:"../apps/infrastructure/scripts/oauth2-permissions.json"}},[e._v("oauth2-permissions.json")]),e._v(" file where all needed OAuth2 permission are defined.")]),e._v(" "),s("h3",{attrs:{id:"shell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shell"}},[e._v("#")]),e._v(" Shell")]),e._v(" "),s("p",[e._v("Open a shell, use Azure CLI to connect to the Azure AD Tenant where you want to create the applications:. If you have created a new Azure AD that is not linked to an Azure subscription, add the additional option "),s("em",[e._v("--allow-no-subscription")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("az login --allow-no-subscription\n")])])]),s("p",[e._v("We have to run the script twice. Once for creating the applications for our "),s("code",[e._v("Development")]),e._v(" stage and once for the "),s("code",[e._v("Testing")]),e._v(" stage.\nPlease use the following parameters to run the script for the "),s("code",[e._v("Development")]),e._v(" stage:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Parameter")]),e._v(" "),s("th",[e._v("Value")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("API-APP-NAME")]),e._v(" "),s("td",[e._v("scmapi-dev")])]),e._v(" "),s("tr",[s("td",[e._v("API-APP-URI")]),e._v(" "),s("td",[e._v("http://scmapi-dev")])]),e._v(" "),s("tr",[s("td",[e._v("UI-APP-NAME")]),e._v(" "),s("td",[e._v("scmfe-dev")])]),e._v(" "),s("tr",[s("td",[e._v("UI-APP-REPLY-URL")]),e._v(" "),s("td",[e._v("the url of your SCM Frontend deployment of stage "),s("code",[e._v("Development")]),e._v(" (This is the Url to the static website e.g. "),s("code",[e._v("https://scmfedev.z20.web.core.windows.net")]),e._v(")")])])])]),e._v(" "),s("p",[e._v("Use the following parameter for the "),s("em",[e._v("Testing")]),e._v(" stage:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Parameter")]),e._v(" "),s("th",[e._v("Value")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("API-APP-NAME")]),e._v(" "),s("td",[e._v("scmapi-test")])]),e._v(" "),s("tr",[s("td",[e._v("API-APP-URI")]),e._v(" "),s("td",[e._v("http://scmapi-test")])]),e._v(" "),s("tr",[s("td",[e._v("UI-APP-NAME")]),e._v(" "),s("td",[e._v("scmfe-test")])]),e._v(" "),s("tr",[s("td",[e._v("UI-APP-REPLY-URL")]),e._v(" "),s("td",[e._v("the url of your SCM Frontend deployment of stage "),s("code",[e._v("Testing")]),e._v("(This is the Url to the static website e.g. "),s("code",[e._v("https://scmfetest.z20.web.core.windows.net")]),e._v("))")])])])]),e._v(" "),s("p",[e._v("Navigate to the directory that contains the oauth2-permissions.json file and run the script twice.")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" Please note down the "),s("code",[e._v("UI AppId")]),e._v(" and "),s("code",[e._v("API AppId")]),e._v(" from the output after each run!")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("scripts> ./aad-integration.sh <API-APP-NAME> <API-APP-URI> <UI-APP-NAME> <UI-APP-REPLY-URL>\n")])])]),s("p",[e._v("The output:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("...\n...\nUI AppId: <please note down>\nAPI AppId <please note down>\n")])])]),s("h3",{attrs:{id:"powershell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#powershell"}},[e._v("#")]),e._v(" PowerShell")]),e._v(" "),s("p",[e._v("Open Powershell and connect to your Azure AD. If you have not installed the AzureAD module run the following command:")]),e._v(" "),s("div",{staticClass:"language-PowerShell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("Install-Module")]),e._v(" AzureAD\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("Import-Module")]),e._v(" AzureAD\n")])])]),s("p",[e._v("Connect to your AzureAD using the command as follows:")]),e._v(" "),s("div",{staticClass:"language-PowerShell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("Connect-AzureAD")]),e._v("\n")])])]),s("p",[e._v("We have to run the script twice. Once for creating the applications for our "),s("code",[e._v("Development")]),e._v(" stage and once for the "),s("code",[e._v("Testing")]),e._v(" stage.\nPlease use the following parameters to run the script for the "),s("code",[e._v("Development")]),e._v(" stage:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Parameter")]),e._v(" "),s("th",[e._v("Value")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("ApiAppName")]),e._v(" "),s("td",[e._v("scmapi-dev")])]),e._v(" "),s("tr",[s("td",[e._v("ApiAppUri")]),e._v(" "),s("td",[e._v("http://scmapi-dev")])]),e._v(" "),s("tr",[s("td",[e._v("UiAppName")]),e._v(" "),s("td",[e._v("scmfe-dev")])]),e._v(" "),s("tr",[s("td",[e._v("UiAppReplyUrl")]),e._v(" "),s("td",[e._v("the url of your SCM Frontend deployment of stage "),s("code",[e._v("Development")]),e._v(" (This is the Url to the static website e.g. "),s("code",[e._v("https://scmfedev.z20.web.core.windows.net")]),e._v(")")])])])]),e._v(" "),s("p",[e._v("Use the following parameter for the "),s("em",[e._v("Testing")]),e._v(" stage:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Parameter")]),e._v(" "),s("th",[e._v("Value")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("ApiAppName")]),e._v(" "),s("td",[e._v("scmapi-test")])]),e._v(" "),s("tr",[s("td",[e._v("ApiAppUri")]),e._v(" "),s("td",[e._v("http://scmapi-test")])]),e._v(" "),s("tr",[s("td",[e._v("UiAppName")]),e._v(" "),s("td",[e._v("scmfe-test")])]),e._v(" "),s("tr",[s("td",[e._v("UiAppReplyUrl")]),e._v(" "),s("td",[e._v("the url of your SCM Frontend deployment of stage "),s("code",[e._v("Testing")]),e._v("(This is the Url to the static website e.g. "),s("code",[e._v("https://scmfetest.z20.web.core.windows.net")]),e._v("))")])])])]),e._v(" "),s("p",[e._v("Navigate to the directory that contains the oauth2-permissions.json file and run the script twice.")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" Please note down the "),s("code",[e._v("UiAppId")]),e._v(" and "),s("code",[e._v("ApiAppId")]),e._v(" from the output after each run!")]),e._v(" "),s("div",{staticClass:"language-PowerShell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("aad"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("integration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ps1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("ApiAppName <API"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("APP"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("NAME> "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("ApiAppUri <API"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("APP"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("URI> "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("UiAppName <UI"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("APP"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("NAME> "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("UiAppReplyUrl <UI"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("APP"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("REPLY"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("URL>\n")])])]),s("p",[e._v("The output:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("...\n...\nApiAppId: <ApiAppId>\nUiAppId: <UiAppId>\n")])])]),s("h2",{attrs:{id:"validate-the-applications-in-azure-ad"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validate-the-applications-in-azure-ad"}},[e._v("#")]),e._v(" Validate the Applications in Azure AD")]),e._v(" "),s("p",[e._v("After you have run the script twice navigate to your Azure AD and checkout the newly created applications. You should see four new applications.")]),e._v(" "),s("h2",{attrs:{id:"protect-scm-contacts-api-with-azure-ad"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#protect-scm-contacts-api-with-azure-ad"}},[e._v("#")]),e._v(" Protect SCM Contacts API with Azure AD")]),e._v(" "),s("p",[e._v("Now that we have created the needed applications in Azure AD it's time to deploy the SCM Contacts API to Azure with Azure AD integration to protect the API. After the deployment the API can only be accessed with a valid access token issued by Azure AD.\nYesterday we have created CI/CD Builds for all services. Today we want to continue with Azure Pipelines to deploy all services with Azure AD integration.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Create and checkout a new branch named "),s("em",[e._v("features/scmcontactsaad")]),e._v(" in your Azure Repo.")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" Make sure that you create the branch in the Azure Repo where you imported the Azure Developer College's sources yesterday.")])]),e._v(" "),s("li",[s("p",[e._v("Open the build file "),s("code",[e._v("scm-contacts-ci.yaml")]),e._v(" under "),s("code",[e._v("day4/apps/pipelines")]),e._v(" and change everything from "),s("code",[e._v("day4")]),e._v(" to "),s("code",[e._v("day5")])])]),e._v(" "),s("li",[s("p",[e._v("Save the definition, commit the changes and push the branch to your remote repository")])]),e._v(" "),s("li",[s("p",[e._v("Navigate to your Azure DevOps Project and run the pipleine "),s("code",[e._v("SCM-Contacts-CI")]),e._v(" targeting the branch "),s("code",[e._v("features/scmcontactsaad")])])]),e._v(" "),s("li",[s("p",[e._v("Go to Releases and edit "),s("code",[e._v("SCM-Contacts-CD")])])]),e._v(" "),s("li",[s("p",[e._v("Add the following variables and map it to the ARM Template's parameters:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Value")]),e._v(" "),s("th",[e._v("ARM Template parameter")]),e._v(" "),s("th",[e._v("Stage")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("AadInstance")]),e._v(" "),s("td",[e._v("https://login.microsoftonline.com")]),e._v(" "),s("td",[e._v("aadInstance")]),e._v(" "),s("td",[e._v("Development")])]),e._v(" "),s("tr",[s("td",[e._v("AadClientId")]),e._v(" "),s("td",[e._v("API AppId, the value that you received from the output when you created the Azure AD application")]),e._v(" "),s("td",[e._v("aadClientId")]),e._v(" "),s("td",[e._v("Development")])]),e._v(" "),s("tr",[s("td",[e._v("AadTenantId")]),e._v(" "),s("td",[e._v("The id of your Azure AD Tenant")]),e._v(" "),s("td",[e._v("aadTenantId")]),e._v(" "),s("td",[e._v("Development")])]),e._v(" "),s("tr",[s("td",[e._v("AadDomain")]),e._v(" "),s("td",[e._v("The domain name of your Azure AD e.g. azuredevcollege.onmicrosoft.com")]),e._v(" "),s("td",[e._v("aadDomain")]),e._v(" "),s("td",[e._v("Development")])]),e._v(" "),s("tr",[s("td",[e._v("AadClientIdUri")]),e._v(" "),s("td",[e._v("http://scmapi-dev")]),e._v(" "),s("td",[e._v("aadClientIdUri")]),e._v(" "),s("td",[e._v("Development")])])])]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Value")]),e._v(" "),s("th",[e._v("ARM Template parameter")]),e._v(" "),s("th",[e._v("Stage")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("AadInstance")]),e._v(" "),s("td",[e._v("https://login.microsoftonline.com")]),e._v(" "),s("td",[e._v("aadInstance")]),e._v(" "),s("td",[e._v("Testing")])]),e._v(" "),s("tr",[s("td",[e._v("AadClientId")]),e._v(" "),s("td",[e._v("API AppId, the value that you received from the output when you created the Azure AD application for stage Testing")]),e._v(" "),s("td",[e._v("aadClientId")]),e._v(" "),s("td",[e._v("Testing")])]),e._v(" "),s("tr",[s("td",[e._v("AadTenantId")]),e._v(" "),s("td",[e._v("The id of your Azure AD Tenant")]),e._v(" "),s("td",[e._v("aadTenantId")]),e._v(" "),s("td",[e._v("Testing")])]),e._v(" "),s("tr",[s("td",[e._v("AadDomain")]),e._v(" "),s("td",[e._v("The domain name of your Azure AD e.g. azuredevcollege.onmicrosoft.com")]),e._v(" "),s("td",[e._v("aadDomain")]),e._v(" "),s("td",[e._v("Testing")])]),e._v(" "),s("tr",[s("td",[e._v("AadClientIdUri")]),e._v(" "),s("td",[e._v("http://scmapi-test")]),e._v(" "),s("td",[e._v("aadClientIdUri")]),e._v(" "),s("td",[e._v("Testing")])])])])]),e._v(" "),s("li",[s("p",[e._v("Run the release build")])])]),e._v(" "),s("h2",{attrs:{id:"validate-the-scm-contacts-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validate-the-scm-contacts-api"}},[e._v("#")]),e._v(" Validate the SCM Contacts API")]),e._v(" "),s("p",[e._v("Now that you have deployed the SCM Contacts API to your environment on Azure it's time to browse the Swagger UI of the API on your "),s("em",[e._v("Development")]),e._v(" stage. Open the Azure portal, go to the API App and browse to the Swagger UI. Try to execute a get request. You will notice that you get back a 401:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(579),alt:"401 Swagger"}})]),e._v(" "),s("p",[e._v("That is what we expected! Your SCM Contacts API now requires a valid access token.\nTo acquire a valid acces token we can create a simple request as we already did in "),s("RouterLink",{attrs:{to:"/day5/challenges/challenge-2.html"}},[e._v("challenge-2")]),e._v(".")],1),e._v(" "),s("p",[e._v("We use the "),s("code",[e._v("Token Echo Server")]),e._v(" again to request an access token from Azure AD for the SCM Contacts API. The tool is listening on port 5001 on your local machine. Tokens are accepted on the route "),s("code",[e._v("http://localhost:5001/api/tokenechofragment")]),e._v(". Before we can start the token request we have to add the url "),s("code",[e._v("http://localhost:5001/api/tokenechofragment")]),e._v(" as a valid reply url to the client Azure AD application. Go to your Azure AD in the Azure portal, open the client application "),s("code",[e._v("scmfe-dev")]),e._v("that you created for the "),s("code",[e._v("Development")]),e._v(" stage and add the url. You can add the reply url under "),s("em",[e._v("Authentication --\x3e Redirect URIs")]),e._v(".")]),e._v(" "),s("p",[s("img",{attrs:{src:a(580),alt:"TokenEchoServer Reply Url"}})]),e._v(" "),s("p",[e._v("Open a shell and run the Token Echo Server from "),s("a",{attrs:{href:"../apps/token-echo-server"}},[s("code",[e._v("day5/apps/token-echo-server")])])]),e._v(" "),s("div",{staticClass:"language-Shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("dotnet run\n")])])]),s("p",[e._v("Replace "),s("code",[e._v("TENANT_ID")]),e._v(" with your AAD Tenant Id and "),s("code",[e._v("APPLICATION_ID")]),e._v(" with the client application's Id (this is the id "),s("em",[e._v("UI AppId")]),e._v(" that you received when you created the first client application). Open a browser and paste the request:")]),e._v(" "),s("div",{staticClass:"language-HTTP extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("https:")]),e._v("//login.microsoftonline.com/TENANT_ID/oauth2/v2.0/authorize?\nclient_id=APPLICATION_ID\n&response_type=id_token+token\n&redirect_uri=http%3A%2F%2Flocalhost%3A5001%2Fapi%2Ftokenechofragment\n&response_mode=fragment\n&scope=openid%20profile%20http%3A%2F%2Fscmapi-dev%2FContacts.Read%20http%3A%2F%2Fscmapi-dev%2FContacts.Create%20http%3A%2F%2Fscmapi-dev%2FContacts.Update%20http%3A%2F%2Fscmapi-dev%2FContacts.Delete%20http%3A%2F%2Fscmapi-dev%2FVisitReports.Create%20http%3A%2F%2Fscmapi-dev%2FVisitReports.Update%20http%3A%2F%2Fscmapi-dev%2FVisitReports.Update%20http%3A%2F%2Fscmapi-dev%2FVisitReports.Delete\n&nonce=1234\n")])])]),s("p",[e._v("After executing the request and you have signed in, Azure AD shows you a consent page and you have to grant access for the requested API permissions.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(581),alt:"Permission Request"}})]),e._v(" "),s("p",[e._v("After giving consent, have a look at your browser's address bar. The "),s("code",[e._v("access_token")]),e._v(" is in the fragment of the url and should look something like this:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("http://localhost:5001/api/tokenechofragment#access_token=eyJ0eX...&token_type=Bearer&expires_in=3599&scope=openid+profile+User.Read+email&id_token=eyJ0eXAiOi...&session_state=0f76c823-eac5-4ec0-9d4a-edf40b783583\n")])])]),s("p",[e._v("Make sure to only copy the "),s("code",[e._v("access_token")]),e._v(", not the full remainder of the string!")]),e._v(" "),s("p",[e._v("Go to "),s("a",{attrs:{href:"http://jwt.ms",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://jwt.ms"),s("OutboundLink")],1),e._v(", paste the token and have a look at the decoded token.")]),e._v(" "),s("h3",{attrs:{id:"authorize-the-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authorize-the-request"}},[e._v("#")]),e._v(" Authorize the request")]),e._v(" "),s("p",[e._v("In the Swagger UI of the SCM Contacts API you see an "),s("code",[e._v("Authorize")]),e._v(" button. After clicking the button you can set your valid "),s("code",[e._v("access_token")]),e._v("that is added to the authentication header with each API request.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(582),alt:"Swagger Authorize"}})]),e._v(" "),s("p",[e._v("Add your access_token as follows:")]),e._v(" "),s("div",{staticClass:"language-Text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Bearer <your access_token>\n")])])]),s("p",[e._v("Authorize the Swagger UI and retry a the GET request. If you want you can now add contacts for the signed in user.")]),e._v(" "),s("h2",{attrs:{id:"pullrequest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pullrequest"}},[e._v("#")]),e._v(" PullRequest")]),e._v(" "),s("p",[e._v("Create al PullRequest and merge your changes into the master branch.")]),e._v(" "),s("h2",{attrs:{id:"wrap-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up"}},[e._v("#")]),e._v(" Wrap up")]),e._v(" "),s("p",[e._v("In this challenge we have adjusted our deployment process to protect the SCM Contacts API with Azure AD. ASP.NET Core comes with an Authentication Middleware that must only be configured to require a JWT Bearer token for each request. Have a look at the code and see how the Middleware is configured.\nTo map the required OAuth2 permission to an API Route ASP.NET Core provides an attribute where you can specify the required Policy.")]),e._v(" "),s("div",{staticClass:"language-C# extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[Authorize(Policy = AuthorizationScopes.ContactsRead)]\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
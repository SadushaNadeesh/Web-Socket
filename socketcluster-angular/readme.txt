0.Go to both the folders and do - npm install

1.just start the scnotification.js server with -node ssnotification.js

2.Then start the angular client.

3.You can see "Hi Im a new client" from server.

4.And notification alert per 10 seconds from angular client.

______________
notes
______________
import * as socketCluster from 'socketcluster-client'; used 

added 
(window as any).global = window; to polyfills.ts to solve "global is not defined when adding" error 
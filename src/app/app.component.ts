import { Component } from '@angular/core';
import { UppyConfig } from 'projects/uppy-angular/src/lib/uppy-config';
import { environment } from 'src/environments/environment';
// import { UppyConfig } from 'uppy-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Uppy Angular Demo';

  settings: UppyConfig = {
    uploadAPI: {
      endpoint: environment.apiUrl + 'files/Upload',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('userToken')
      }
    },
    plugins: {
      Webcam: true,
      GoogleDrive:true,
      Instagram:true,
      Facebook:true,
      Dropbox:true,
      ScreenCapture:true
    },
    restrictions: {
      // maxFileSize: 1000000,
      maxNumberOfFiles: 10,
      // minNumberOfFiles: 1,
      // allowedFileTypes: ['image/*','pdf/*', 'docs/*']
    },
    debug:true,
    note:"",
    theme:'auto',
    showProgressDetails:false,
    hideRetryButton:false,
    hideCancelButton:false,
    hideProgressAfterFinish:true,
    proudlyDisplayPoweredByUppy:true
  }

  onFileAdd(evt) {
    console.log("onFileAdd", evt)
  }

  onFileUpload(evt) {
    console.log("onFileUpload", evt)
  }

  uploadResult(evt) {
    console.log("uploadResult", evt)
  }

}

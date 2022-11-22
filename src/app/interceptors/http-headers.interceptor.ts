import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { LoadingService } from "../services/loading.service";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor(public loaderService: LoadingService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.isLoading.next(true)
    request = request.clone({
      setHeaders: {
        'apiKey': '...',
        'apiURL': 'https://api.edamam.com/api/recipes/v2?type=public',
      },
      setParams: {
        key: '...',
      }
    });
    return next.handle(request).pipe(
      finalize(
        () => {
          this.loaderService.isLoading.next(false);
        }
      )
    );
  }
}
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
        'apiKey': 'ed6eaca4437257c5904882d1b4120c67',
        'apiURL': 'https://api.edamam.com/api/recipes/v2?type=public',
      },
      setParams: {
        key: 'ed6eaca4437257c5904882d1b4120c67',
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
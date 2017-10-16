import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { AppError } from "../common/app-error";
import { NotFoundError } from "../common/not-found-error";
import { BadInput } from "../common/bad-input";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

@Injectable()
export class DataService {

    constructor(private url: string, private http: Http) { }

    getAll() {
        return this.http.get(this.url)
            .map(response => response.json())
            .catch(this.handleError);
    }

    create(data) {
        return this.http.post(this.url, JSON.stringify(data))
            .map(response => response.json())
            .catch(this.handleError);
    }

    update(data) {
        return this.http.patch(this.url + "/" + data.id, JSON.stringify({ isRead: true }))
            .map(response => response.json())
            .catch(this.handleError);
    }

    delete(id) {
        return this.http.delete(this.url + "/" + id)
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        if (error.status === 400) {
            return Observable.throw(new BadInput());
        } else if (error.status === 404) {
            return Observable.throw(new NotFoundError());
        }
        return Observable.throw(new AppError(error));
    }

}

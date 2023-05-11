<?php

namespace App\Http\Controllers;

use App\Mail\ContactsForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class PageController extends Controller
{
    public function index() {
        return view('pages.home.index');
    }

    public function politics() {
        return view('pages.politics.index');
    }

    public function formContacts(Request $request)
    {
        $mail = new \stdClass();
        $mail->name = $request->name;
        $mail->phone = $request->phone;
//        return response()->json($mail);
        if (Mail::to('Lara6473@mail.ru')->send(new ContactsForm($mail))) {
//            Contact::create($request->all());
//            return back();
            return response()->json($request);
        } else {
            return response()->json(["answer" => "error"]);

        }
    }
}

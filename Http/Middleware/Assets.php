<?php

namespace Modules\NavigatePanel\Http\Middleware;

use Auth;
use Asset;
use Closure;
use Illuminate\Http\Request;

class Assets
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (! $request->ajax() && (! config('auth.isAuth') || Auth::check()))
        {
            Asset::addCss('module_navigatepanel', 'assets/modules/navigatepanel/navigatepanel.css', true)
                 ->addJs('module_navigatepanel', 'assets/modules/navigatepanel/navigatepanel.js', true);
        }
        return $next($request);
    }
}

<?php

namespace App\Providers;

use App\Models\Team;
use App\Policies\TeamPolicy;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        Team::class => TeamPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        //droit sur la gestion des utilisateurs.
        Gate::define('manage-users', function($user){
            return $user->hasAnyRole(['ADMIN','ROOT']);
        });
        Gate::define('ENREGIST_COURRIER_CONFIDENT', function($user){
            return $user->hasAnyRole(['DIR_COURRIER']);
        });
        Gate::define('ENREGIST_COURRIER_ORDINAIRE', function($user){
            return $user->hasAnyRole(['BUR_ORDRE','DIR_COURRIER']);
        });
        Gate::define('VALIDAT_REJET_COURRIER', function($user){
            return $user->hasAnyRole(['DIR_COURRIER']);
        });
    }
}
 
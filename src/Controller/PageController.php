<?php

namespace Drupal\vue_starter\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Access\CsrfTokenGenerator;
use Drupal\Core\Link;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

/**
 * Class PageController.
 */
class ImportController extends ControllerBase {

  /**
   * CSRF Token wrapper.
   *
   * @var \Drupal\Core\Access\CsrfTokenGenerator
   */
  protected $csrfToken;

  /**
   * Constructs a new TrainingCertsController object.
   */
  public function __construct(CsrfTokenGenerator $csrf_token) {
    $this->csrfToken = $csrf_token;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('csrf_token')
    );
  }

  /**
   * Getpage.
   *
   * @return array
   *   Return Hello string.
   */
  public function page() {
    $renderable = [
      '#cache' => [
        'max-age' => 0,
      ],
    ];

    $renderable += [
      '#attached' => [
        'library' => 'vue_starter/app',
        'drupalSettings' => [
          'vue_starter' => [
            'token' => $this->csrfToken->get('vue_starter/xhr'),
          ],
        ],
      ],
      'app' => [
        '#markup' => '<div id="vue_starter_app" class="vuejs"><p><span class="spinner small"></span></p></div>',
      ],
    ];

    return $renderable;
  }

}

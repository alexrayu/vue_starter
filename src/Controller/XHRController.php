<?php

namespace Drupal\vue_starter\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Drupal\Component\Utility\Xss;

/**
 * Class XHRController.
 */
class XHRController extends ControllerBase {

  /**
   * Constructs a new XHRController object.
   */
  public function __construct() {

  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      // $container->get('service'),
    );
  }

  /**
   * XHR handler.
   *
   * @return string
   *   Return Hello string.
   */
  public function xhr() {
    $result = [];

    // Check if request is authorized.
    if ($this->currentUser()->isAnonymous()) {
      throw new AccessDeniedHttpException();
    }

    $request = \Drupal::request();
    $params = $request->request->all();
    $app_type = $params['app_type'];
    $allowed_types = [
      'report',
      'cert',
    ];
    if (!empty($params['action']) && in_array($app_type, $allowed_types)) {
      switch ($params['action']) {

        // Delete a report file.
        case 'delete_file':
          $result = $this->deleteFile(Xss::filter($params['report_id']), $app_type);
          break;
      }
    }

    return new JsonResponse($result);
  }

  /**
   * Performs an operation.
   *
   * @param array $data
   *   Operation data.
   *
   * @return array
   *   Response data.
   */
  protected function someOperation($data) {
    return ['res' => 1];
  }

}
